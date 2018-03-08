import Resolutions from './resolutions';


const res = Resolutions.find({}).fetch();
console.log(res);


export default {
    Query: {
        resolutions() {
            return Resolutions.find({}).fetch();
        }
    },

    Mutation: {
        createResolution() {
            console.log("got here");
        //    const resolutionId = Resolutions.insert({
        //         name: "Thiago Marinho"
        //    });
        }
    }
};
