/**
 * Authorizer to access to endpoints
 *
 */
export const handler = (event: any, context: any, callback: any): any => {
    // Figure out how to configure this more elegantly
    // this is a @TODO
    const policyDocument = {
        principalId: 1,
        policyDocument: {
            Version: '2012-10-17',
            Statement: [
                {
                    Action: 'execute-api:Invoke',
                    Effect: 'Allow',
                    Resource: '*',
                },
            ],
        },
    };

    try {
        const eventEl = event as any;
        const headers = eventEl.headers as any;

        if (headers.authorization && headers.authorization === `Bearer ${process.env.APIKEY}`) {
            callback(null, policyDocument);
        }

        throw new Error('Unauthorized');
    } catch (error) {
        throw new Error('Unauthorized');
    }
};
