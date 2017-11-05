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
            methods: {
                loadLimit: function () {
                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        limit = localStorage.getItem('limit');
                    }
                },
                setLimit: function () {
                    limit = this.limit
                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        localStorage.setItem('limit', limit);
                    }
                },
                specialNumber: function () {
                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        this.SpecialNumbers = localStorage.getItem('SpecialNumber');
                    }

                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        localStorage.setItem('SpecialNumber', this.SpecialNumbers);
                    }
                },
                picking: function (){
                    var limit, number, target, length
                    limit = this.limit
                    for ( i = 0; i < limit; i++ ) {
                        source.push(i)
                    }
                    number = Math.floor(Math.random() * source.length)
                    this.result = source[number] + 1
                    if ( this.SpecialNumbers.indexOf(result) === -1 ) {
                        target = result - 1
                        length = limit + 1
                        source.splice(length, target)
                    }
                }
            }
        }
    );
};