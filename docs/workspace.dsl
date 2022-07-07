workspace {

    model {

        user = person "User"

        goaltracker = softwareSystem "GoalTracker" {
            web = container "Web UI" "" "WebUI" "WebUI"
            api = container "API" "" ".NET Backend" "Backend"

            web -> api "calls"



        }
        
        telegram = softwareSystem "Telegram" "" "Telegram"
        database = softwareSystem "Azure SQL Database" "Stores data" "Database" 

        telegram -> api "calls"
        user -> web "Uses"
        user -> telegram "Uses"
        api -> database "Stores"
    }

    views {

        systemLandscape "Context" {
            include * 
            autoLayout
        }

        container goaltracker "GoalTracker"{
            include * 

            autoLayout
        }

        styles {
            element "Database" {
                shape Cylinder
            }

            element "Backend" {
                shape Component
            }

            element "WebUI" {
                shape WebBrowser
            }

            element "Telegram" {
                shape MobileDevicePortrait
            }
        }

        theme default
    }

    
    
}