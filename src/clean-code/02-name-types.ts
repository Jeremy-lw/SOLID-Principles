(() => {
    
    const temperaturesList = [33.6, 12.34];

    const serverIp = '123.123.123.123';

    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const userEmails = users.map( user => user.email );

    const canJump = false;
    const canRun = true;
    const hasItems = true;
    const isLoading = false;

    const initialTime = new Date().getTime();
    //....
    const finishTime = new Date().getTime() - initialTime;


    function getBooks() {
        throw new Error('Function not implemented.');
    }


    function getBooksFromUrl( u: string) {
        throw new Error('Function not implemented.');
        console.log(u);
    }
    

    function calculateAreaSquare( s: number ) {
        throw new Error('Function not implemented.');
        console.log(s);
    }


    function printJob() {
        throw new Error('Function not implemented.');
    }
    
    




})();





