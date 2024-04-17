import { authenticate, loginUserInterface } from "@/src/actions/auth/authenticate";
import { registerNewUser, registerNewUserInterface } from "@/src/actions/auth/register-new-user";
import { getProfile } from "@/src/actions/get-profile";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function userMutations() {

    // const queryClient = useQueryClient();

    const { data: user, isSuccess } = useQuery( {
        queryKey: ['@req.profile'],
        queryFn: async () => await getProfile(),
    } )



    return {
        user
    }
}