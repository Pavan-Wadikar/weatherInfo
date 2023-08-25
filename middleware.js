

exports.postData=async (req,res)=>{
    try {
        
        const apiKey="406ff7edb48ba9b30b883a48ebd3a578";
        const cityName=  req.body.cityName
        const unit='metric'
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${unit}`;

        const apiData= await fetch(url)
        const jsonData= await apiData.json()
        res.send(jsonData);        
        
        

    } catch (error) {
        console.log(error);
        
    }
} 

