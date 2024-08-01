import { Alert } from "react-native";
import { dataServer } from "../../../Service/AxiosConfig";
import Toast from "react-native-toast-message";

export const GetGames = async (setRandomGames: any, setLoading: any, setGameQuestion: any) => {
    try {
        const AllGames = await dataServer.get('/games/getrandomexamplegame');
        const responseData = AllGames.data; // Access the data property
        console.log("responseData", responseData.data);

        const gamesArray = responseData.data.games;
        const randomIndex = Math.floor(Math.random() * gamesArray.length);
        const randomGame = gamesArray[randomIndex];
        // console.log('random game', randomGame);
        if (randomGame != null) {
            setRandomGames(randomGame._id);
            //       console.log('random game after set state', randomGame);

        } else {
            Alert.alert('No Games Available');
        }
        if (responseData != null) {

            GetGamesQuestion(randomGame._id, setGameQuestion);

        }
    } catch (err) {
        console.error('Error:', err);
    } finally {
        setLoading(false);
    }
};

const GetGamesQuestion = async (id: any, setGameQuestion: any) => {
    try {



        const SpecificGame = await dataServer.get(`/games/questionsOfLevelOfExampleGame/${id}`);
        const responseData = SpecificGame.data;
        // console.log("Games Question Option", responseData.data.questions);
        setGameQuestion(responseData.data.questions);



    } catch (err) {
        console.error('Error:', err);
    }
};


