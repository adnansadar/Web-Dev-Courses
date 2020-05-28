        //Get input element
        let filterInput = document.getElementById('filterInput');
        //Add event listener
        filterInput.addEventListener('keyup', filterNames);

        function filterNames() {
            //Get value of input
            let filterValue = document.getElementById('filterInput').value.toUpperCase();

            //Get names ul
            let ul = document.getElementById('names');

            //Get lis from ul
            let li = ul.querySelectorAll(
            'li.collection-item'); //querySelector can be used to access class unlike getElementById

            //Loop through collection-item lis
            for (let i = 0; i < li.length; i++) {
                let a = li[i].getElementsByTagName('a')[0];//0 to get just the current link
                if(a.innerHTML.toUpperCase().indexOf(filterValue)>-1){//innerHtml to get the name
                    li[i].style.display = '';
                }
                else{
                    li[i].style.display = 'none';
                }
            }
        }