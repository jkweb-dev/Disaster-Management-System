import ResetPasswordContainer from "@/components/Auth/resetPasswordContainer";

export default async function ResetPasswordPage({ params }) {

    const { token } = await params;

    return <ResetPasswordContainer token={token} />;

}