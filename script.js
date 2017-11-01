window.onload = function () {
    var limit = 36;
    var specialNumbers = [];

    var vm = new Vue(
        {
            el: '#specialNumber',
            data: {
                specialNumber: ''
            },
            methods: {
                specialNumber: function () {
                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        specialNumbers = localStorage.setItem('specialNumber');
                        specialNumbers = window.localStorage.setItem('specialNumber');
                        specialNumbers = localStorage.specialNumber
                    }
                    var specialNumber = this.specialNumber
                    var id = this.id
                    if ( target === '' ) {
                        if ( id === 2 ) {
                            specialNumbers.shift()
                        } else {
                            specialNumbers.pop()
                        }
                    } else {
                        if ( target === 2 ) {
                            specialNumbers.unshift(specialNumber)
                        } else {
                            specialNumbers.push(specialNumber)
                        }
                    }
                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        localStorage.setItem('specialNumber', specialNumbers);
                        window.localStorage.setItem('specialNumber', specialNumbers);
                        localStorage.specialNumber = specialNumbers;
                    }
                }
            }
        }
    )
    var vm1 = new Vue(
        {
            el: '#setLimit',
            data: {
                limit: '36'
            },
            methods: {
                loadLimit: function () {
                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        limit = localStorage.setItem('limit');
                        limit = window.localStorage.setItem('limit');
                        limit = localStorage.specialNumber
                    }
                },
                setLimit: function () {
                    limit = this.limit
                    if(('localStorage' in window) && (window.localStorage !== null)) {
                        localStorage.setItem('specialNumber', limit);
                        window.localStorage.setItem('specialNumber', limit);
                        localStorage.specialNumber = limit;
                    }
                }
            }
        }
    )
    //var vm2 = new Vue()
    var vm3 = new Vue(
        {
            el: '#result',
            data: {
                result: '2'
            }
        }
    )
};