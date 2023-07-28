import "./Charter.css"
import ChartBar from "./ChartBar"
const Charter=(props)=>{
    const datapointvalue=props.dataPoints.map((dataPoint)=>{
        return dataPoint.value;
    })
    const maxVal=Math.max(...datapointvalue)
    return (
        <div className="chart">
            {props.dataPoints.map((datapoint)=>{
                return <ChartBar key={datapoint.label} value={datapoint.value} maxVal={maxVal} label={datapoint.label}/>
            })}
        </div>

    )
}
export default Charter;