export const dateFormat = (date) => {
    let newdate = new Date(date)
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let res = `${monthNames[newdate.getMonth()]} ${newdate.getFullYear()}`
    return res

}