import "./dashboard.css"
import Looks5OutlinedIcon from '@mui/icons-material/Looks5Outlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import ViewCompactOutlinedIcon from '@mui/icons-material/ViewCompactOutlined';
export default function Dashboard(_){
    return (
        <div className="dashboard">
           <div className="dashboardWrapper">
           <h3 className="dashboardTitle">Dashboard</h3>
           <ul className="dashboardList">
           <a href="/count"><li className="dashboardListItem"><Looks5OutlinedIcon className="icon"/>count analysis</li></a>
           <a href="/speed"><li className="dashboardListItem"><SpeedOutlinedIcon className="icon" />speed analysis</li></a>
           <a href="/congestion"><li className="dashboardListItem"><ViewCompactOutlinedIcon className="icon" />congestion level</li></a>
            </ul>

        </div>
        </div>
    )
}