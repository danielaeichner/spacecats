import { APIGatewayEvent, APIGatewayProxyResult  } from 'aws-lambda';
import spacecats from './data/spacecats.json';
import { SpaceCats } from '../types/SpaceCats';

export const handler = async (
    event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
    try {
        const spaceCatsSorted: SpaceCats[] = spacecats as SpaceCats[];


        // return spacecats
        return {
            statusCode: 200,
            body: JSON.stringify(spaceCatsSorted),
        
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error' }),
        };
    }
};
