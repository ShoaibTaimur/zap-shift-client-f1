import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import logo from "../../../../Resources/assets/logo.png";
import { useForm, type SubmitHandler } from "react-hook-form";

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
};

const SignUp = ({
  heading = "Create your Account",
  buttonText = "Be a Rider",
  googleText = "Google",
  loginText = "Already have an account?",
  loginUrl = "/auth",
  className,
}: Login5Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
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
                  name="password"
                  {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password?.type==='minLength' && (
                  <span className="text-xs text-red-500">
                    Minimum length is 6
                  </span>
                )}
              </div>
              <Button variant="signUp" type="submit" className="w-full">
                {buttonText}
              </Button>
              <div className="flex w-full flex-col gap-2">
                <Button className="w-full" variant="outline">
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
