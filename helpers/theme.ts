const getBackgroundClass = (theme: string) => {
    switch (theme){
        case "pink":
            return "bg-pink-500"
        case "red":
            return "bg-red-500"
        case "blue":
            return "bg-blue-500"
        case "yellow":
            return "bg-yellow-500"
        case "green":
            return "bg-green-500"
        default: 
            return "bg-indigo-500"
    }    
}

const getTextClass = (theme: string) => {
    switch (theme){
        case "pink":
            return "text-pink-500"
        case "red":
            return "text-red-500"
        case "blue":
            return "text-blue-500"
        case "yellow":
            return "text-yellow-500"
        case "green":
            return "text-green-500"
        default: 
            return "text-indigo-500"
    }    
}

const getProseClass = (theme: string) => {
    switch (theme){
        case "pink":
            return "prose-pink"
        case "red":
            return "prose-red"
        case "blue":
            return "prose-blue"
        case "yellow":
            return "prose-yellow"
        case "green":
            return "prose-green"
        default: 
            return "prose-indigo"
    }    
}

export { getBackgroundClass, getTextClass, getProseClass }