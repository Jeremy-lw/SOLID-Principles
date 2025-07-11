(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }
    
    function getActorsInfo( id: string ) {
        console.log({ id });
    }
    
    function getActorBioById( id: string ) {
        console.log({ id });
    }
        
    interface IMovie {
        cast        : string[];
        description : string; 
        rating      : number; 
        title       : string; 
    }

    function createMovie({cast,description,rating,title} : IMovie) {
        console.log({ title, description, rating, cast });
    }
    
    function createActor( fullName: string, birthdate: Date ): boolean {            
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }


    //*continuation 

    const getPayAmount = ({ isDead = true, isSeparated = false , isRetired = false }): number => {                

        if ( isDead ) return 1500;

        if ( isSeparated ) return 2500;        

        return isRetired ? 3000 : 4000;
                 
    }



})();





