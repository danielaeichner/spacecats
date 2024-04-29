import { APIGatewayEvent, APIGatewayProxyResult  } from 'aws-lambda';

export const handler = async (
    event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
    try {
        
        console.log(event.body)

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Hello from Lambda!' }),
        
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error' }),
        };
    }
};
