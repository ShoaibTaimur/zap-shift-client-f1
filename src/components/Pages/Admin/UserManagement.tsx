import Loading from "@/components/Shared/Loading";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AxiosSecure from "@/Hooks/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FaUserMinus, FaUserShield } from "react-icons/fa6";
import { toast } from "sonner";

type userList = {
  _id: string;
  displayName: string;
  email: string;
  photoURL: string;
  role: string;
};

const UserManagement = () => {
  const axiosSecure = AxiosSecure();
  const [searchText, setSearchText] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchText.trim());
    }, 500);

    return () => clearTimeout(timer);
  }, [searchText]);
  const {
    data: userList = [],
    isLoading,
    refetch,
  } = useQuery<userList[]>({
    queryKey: ["users", debouncedSearch],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?search=${debouncedSearch}`);
      return res.data;
    },
  });

  const handleRevoke = (id: string) => {
    const roleUpdate = { role: "user" };
    axiosSecure.patch(`/users/${id}/role`, roleUpdate).then((res) => {
      if (res?.data?.modifiedCount) {
        toast.warning("Admin Power revoked.");
      }
      refetch();
    });
  };
  const handleGrant = (id: string) => {
    const roleUpdate = { role: "admin" };
    axiosSecure.patch(`/users/${id}/role`, roleUpdate).then((res) => {
      if (res?.data?.modifiedCount) {
        toast.success("Admin permission given Successfully");
      }
      refetch();
    });
  };
  return (
    <div className="bg-white rounded-2xl px-8 md:px-10 py-6">
      <p>Search user</p>
      <Field orientation="horizontal">
        <Input
          onChange={(e) => setSearchText(e.target.value)}
          type="search"
          placeholder="Search..."
        />
      </Field>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">No.</TableHead>
            <TableHead className="text-center">Photo</TableHead>
            <TableHead className="text-center">User Name</TableHead>
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Role</TableHead>
            <TableHead className="text-center">Admin Actions</TableHead>
            <TableHead className="text-center">Other Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={7} className="py-10">
                <Loading />
              </TableCell>
            </TableRow>
          ) : (
            userList.map((user, i) => (
              <TableRow key={user._id}>
                <TableCell className="text-center">{i + 1}</TableCell>
                <TableCell className="flex justify-center">
                  <img className="w-10" src={user?.photoURL} alt="user image" />
                </TableCell>
                <TableCell className="text-center">
                  {user?.displayName}
                </TableCell>
                <TableCell className="text-center">{user?.email}</TableCell>
                <TableCell className="text-center">{user?.role}</TableCell>
                <TableCell className="flex justify-center">
                  {user?.role == "super_admin" ? (
                    <AlertDialog>
                      <AlertDialogTrigger
                        render={
                          <Button disabled variant="destructive">
                            <FaUserMinus />
                          </Button>
                        }
                      />
                      <AlertDialogContent size="sm">
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Do you want to remove admin access from this user?
                            This action can not be reverted.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleRevoke(user?._id)}
                            variant="destructive"
                          >
                            Revoke
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  ) : user?.role == "admin" ? (
                    <AlertDialog>
                      <AlertDialogTrigger
                        render={
                          <Button variant="destructive">
                            <FaUserMinus />
                          </Button>
                        }
                      />
                      <AlertDialogContent size="sm">
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Do you want to remove admin access from this user?
                            This action can not be reverted.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleRevoke(user?._id)}
                            variant="destructive"
                          >
                            Revoke
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  ) : (
                    <AlertDialog>
                      <AlertDialogTrigger
                        render={
                          <Button variant="secondary">
                            <FaUserShield />
                          </Button>
                        }
                      />
                      <AlertDialogContent size="sm">
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Do you want to give admin access to this user? This
                            action can not be reverted.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleGrant(user?._id)}
                            variant="secondary"
                          >
                            Grant
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserManagement;
