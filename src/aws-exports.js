/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": "ap-south-1",
    "aws_cognito_identity_pool_id": "ap-south-1:0c6f77c7-37b0-4050-b564-5bec7aa43e9e",
    "aws_cognito_region": "ap-south-1",
    "aws_user_pools_id": "ap-south-1_j18ORb03V",
    "aws_user_pools_web_client_id": "70dovbm5sosp9nok6slgeqi3dl",
    "oauth": {
        "domain": "helpingstartups8ad54258-8ad54258-prod.auth.ap-south-1.amazoncognito.com",
        "scope": [
            "phone",
            "email",
            "openid",
            "profile",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": "https://helpingstartups.netlify.app/",
        "redirectSignOut": "https://helpingstartups.netlify.app/",
        "responseType": "code"
    },
    "federationTarget": "COGNITO_USER_POOLS",
    "aws_cloud_logic_custom": [
        {
            "name": "helpingstartups",
            "endpoint": "https://u9hjeiungh.execute-api.ap-south-1.amazonaws.com/prod",
            "region": "ap-south-1"
        }
    ]
};


export default awsmobile;
