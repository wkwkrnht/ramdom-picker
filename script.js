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
                    number = Math.floor(Math.random() * limit)
                    for ( i = 0; i < limit; i++ ) {
                        source.push(i)
                    }
                    this.result = source[number] + 1
                    console.log(number + '&' + this.result)
                    //if ( this.SpecialNumbers.indexOf(this.result) < 0 ) {
                        target = this.result - 1
                        source.splice(target, 1)
                    //}
                }
            }
        }
    );
};