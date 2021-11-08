import ReactJsAlert from "reactjs-alert"

import React from 'react'

export default function Alert(alerts,setAlerts) {
    return (
        <div>
            <ReactJsAlert
                status={alerts.status}   // true or false
                type={alerts.type}   // success, warning, error, info
                title={alerts.title}   // title you want to display
                color ="blue"
                Close={() => setAlerts({
                type: "error",
                status: false,
                title: "",
            
      }
    
      )}   // callback method for hide
  />
        </div>
    )
}
