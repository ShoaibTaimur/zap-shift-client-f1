import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import logo from "../../../../Resources/assets/logo.png";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "@/Context/AuthContext";
import { toast } from "sonner";
import { FieldDescription, FieldLabel } from "@/components/ui/field";
import axios from "axios";

interface Login5Props {
  heading?: string;
  buttonText?: string;
  googleText?: string;
  githubText?: string;
  facebookText?: string;
  loginText?: string;
  loginUrl?: string;
  className?: string;
}
type Inputs = {
  name: string;
  email: string;
  password: string;
  photo: FileList;
};

const SignUp = ({
  heading = "Create your Account",
  buttonText = "Be a Rider",
  googleText = "Google",
  loginText = "Already have an account?",
  loginUrl = "/auth",
  className,
}: Login5Props) => {
  const info = useContext(AuthContext);
  const signUp = info?.signUpUser;
  const googleSignUp = info?.signUpGoogle;
  const user = info?.user;
  const updateUserProfile=info?.updateUserProfile;
  console.log(user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleGoogle = () => {
    googleSignUp?.().then((result) => {
      if (result) {
        toast.success("Successfully Signed Up!");
      }
    });
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const profileImg = data.photo[0];

    signUp?.(data?.email, data?.password, data?.name)
      .then(() => {
        const formData = new FormData();
        formData.append("image", profileImg);
        axios.post(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOST}`,
          formData,
        ).then(res=>{
          const userProfile={
            photoURL:res?.data?.data?.url
          };
          updateUserProfile(userProfile);
        });

        toast.success("Congrats! You Successfully became a rider.");
      })
      .catch((error) => {
        if (error.code == "auth/email-already-in-use") {
          toast.warning("Sorry! Email is already being used.");
        }
      });
  };

  return (
    <section className={cn("py-10 bg-background", className)}>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 lg:justify-start">
          <img src={logo} alt="zapshift-logo" className="h-10 dark:invert" />
          {heading && <h1 className="text-2xl font-semibold">{heading}</h1>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex w-75 sm:w-full sm:max-w-sm sm:min-w-sm flex-col items-center gap-y-4 rounded-lg bg-white border border-[#bce212] px-6 py-12">
              <div className="flex w-full flex-col gap-2">
                <FieldLabel htmlFor="picture">Picture</FieldLabel>
                <Input
                  id="picture"
                  type="file"
                  {...register("photo", { required: true })}
                />
                <FieldDescription>Select a picture to upload.</FieldDescription>
              </div>
              <div className="flex w-full flex-col gap-2">
                <Label>Name</Label>
                <Input
                  type="text"
                  placeholder="your full name"
                  className="bg-background text-sm"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-xs text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex w-full flex-col gap-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-background text-sm"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-xs text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex w-full flex-col gap-2">
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  className="bg-background text-sm"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,}$/,
                  })}
                />
                {errors.password?.type === "minLength" && (
                  <span className="text-xs text-red-500">
                    Minimum length is 6
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-xs text-red-500">
                    Password must have atleast 1 lowercase letter, atleast 1
                    uppercase letter, atleast 1 number, atleast 1 special
                    character (@$!%*?&-) and minimum 8 characters total
                  </span>
                )}
              </div>
              <Button variant="signUp" type="submit" className="w-full">
                {buttonText}
              </Button>
              <div className="flex w-full flex-col gap-2">
                <Button
                  onClick={() => handleGoogle()}
                  className="w-full"
                  variant="outline"
                >
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg"
                    className="size-5"
                    alt="Google"
                  />
                  {googleText}
                </Button>
              </div>
            </div>
          </form>
          <div className="flex justify-center gap-1 text-sm text-muted-foreground">
            <p>{loginText}</p>
            <a
              href={loginUrl}
              className="font-medium text-[#8FA748] hover:underline"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
