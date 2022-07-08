workspace {

    model {
        user = person "User" "Test"
        goalTracker = softwareSystem "GoalTracker"{
            goalTrackerUI = container "WebUI" "User interface" "Angular" "Browser"
            goalTrackerApi = container "API" "Processes changes" ".NET 6" "Service"

            goalTrackerUI -> goalTrackerApi "calls" "http"
        }
        persistence = softwareSystem "Database" "Data storage" "Database"
        telegram = softwareSystem "Telegram" "Telegram"

        telegram -> goalTrackerApi "pushes updates"
        goalTrackerApi -> persistence "calls"

        user -> goalTrackerUI "uses"
        user -> telegram "uses"
    }

    views {
        container goalTracker {
            include *
            autoLayout
        }

        theme default

        styles {
            element "Browser"{
                shape WebBrowser
            }

            element "Service"{
                shape Component
            }

            element "Database"{
                shape Cylinder
            }
        }
    }

}