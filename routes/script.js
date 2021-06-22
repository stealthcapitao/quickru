

        ///DESIGN CATEGORY SHOWHIDE
        let desbtn = document.querySelector('.designbutton');
        let descat = document.querySelector('.design');
        
            desbtn.addEventListener('click', () => {
                if(descat.style.display === 'none'){
                    [].forEach.call(document.querySelectorAll('.design'), function (el) {
                        el.style.display = 'inline-block';
                    })
                }else {
                    [].forEach.call(document.querySelectorAll('.design'), function (el) {
                        el.style.display = 'none';
                    })
                }
            })
        
        ///VIDEO CATEGORY SHOWHIDE
        let vidbtn = document.querySelector('.videobutton');
        let vidcat = document.querySelector('.video');
        
            vidbtn.addEventListener('click', () => {
                if(vidcat.style.display === 'none'){
                    [].forEach.call(document.querySelectorAll('.video'), function (el) {
                        el.style.display = 'inline-block';
                    })
                }else {
                    [].forEach.call(document.querySelectorAll('.video'), function (el) {
                        el.style.display = 'none';
                    })
                }
            })

        ///TEXT CATEGORY SHOWHIDE
        let textbtn = document.querySelector('.textbutton');
        let textcat = document.querySelector('.text');
        
            textbtn.addEventListener('click', () => {
                if(textcat.style.display === 'none'){
                    [].forEach.call(document.querySelectorAll('.text'), function (el) {
                        el.style.display = 'inline-block';
                    })
                }else {
                    [].forEach.call(document.querySelectorAll('.text'), function (el) {
                        el.style.display = 'none';
                    })
                }
            })
        ///PHOTO CATEGORY SHOWHIDE
        let phobtn = document.querySelector('.photobutton');
        let phocat = document.querySelector('.photo');
        
            phobtn.addEventListener('click', () => {
                if(phocat.style.display === 'none'){
                    [].forEach.call(document.querySelectorAll('.photo'), function (el) {
                        el.style.display = 'inline-block';
                    })
                }else {
                    [].forEach.call(document.querySelectorAll('.photo'), function (el) {
                        el.style.display = 'none';
                    })
                }
            }) 

        ///PROGRAMMING CATEGORY SHOWHIDE
        let progbtn = document.querySelector('.progrbutton');
        let progcat = document.querySelector('.progr');
        
            progbtn.addEventListener('click', () => {
                if(progcat.style.display === 'none'){
                    [].forEach.call(document.querySelectorAll('.progr'), function (el) {
                        el.style.display = 'inline-block';
                    })
                }else {
                    [].forEach.call(document.querySelectorAll('.progr'), function (el) {
                        el.style.display = 'none';
                    })
                }
            }) 
        
        ///GAMEDEV CATEGORY SHOWHIDE
        let gdbtn = document.querySelector('.gamedevbutton');
        let gdcat = document.querySelector('.gamedev');
        
            gdbtn.addEventListener('click', () => {
                if(gdcat.style.display === 'none'){
                    [].forEach.call(document.querySelectorAll('.gamedev'), function (el) {
                        el.style.display = 'inline-block';
                    })
                }else {
                    [].forEach.call(document.querySelectorAll('.gamedev'), function (el) {
                        el.style.display = 'none';
                    })
                }
            }) 
            

        