import Resolutions from './resolutions';

// Resolutions.insert({
//     name: "Thiago Marinho"
// })

const res = Resolutions.find({}).fetch();
console.log(res);


export default {
    Query: {
        hi() {
            return "Hello Level Up...";
        },
        resolutions() {
            return Resolutions.find({}).fetch();
        }
    }
};
