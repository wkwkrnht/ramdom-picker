window.onload = function () {
    var limit = 36;
    var source = [];

    var app = new Vue(
        {
            el: '#pick',
            data: {
                SpecialNumber: 0,
                limit: 36,
                SpecialNumbers: [],
                result: "Let's pick!"
            },
            created: function () {
                if(('localStorage' in window) && (window.localStorage !== null)) {
                    this.limit = localStorage.getItem('limit');
                    this.SpecialNumbers = localStorage.getItem('SpecialNumbers');
                }
            },
            methods: {
                setLimit: function () {
                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        localStorage.setItem('limit', this.limit);
                    }
                },
                setSpecialNumber: function () {
                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        localStorage.setItem('SpecialNumbers', this.SpecialNumbers);
                    }
                },
                picking: function (){
                    var limit, number, target
                    limit = this.limit
                    target = Math.floor(Math.random() * limit)
                    if ( source.indexOf(target) < 0) {
                        this.result = target
                    }
                    if ( this.SpecialNumbers.indexOf(this.result) < 0 ) {
                        source.push(target)
                    }
                    console.log(this.result)
                }
            }
        }
    );
};