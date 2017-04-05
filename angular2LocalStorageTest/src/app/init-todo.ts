export class Init {
    load() {
        if (localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined) {
            console.log('No todos Found ----Creating');
            var todos = [
                { text: "learn chinese" },
                { text: "piano" },
                { text: "math" }
            ];

             localStorage.setItem('todos', JSON.stringify(todos));

        return
        }else{
            console.log('found todos...');
        }

       
    }
}