var provider_data =
{
    "playfab":{
        "www":"https://playfab.com/",
        "pricing":{
            "_link":"https://playfab.com/pricing/",
            "essentials":{
                "cost":{
                    "monthly_charge": 0,
                    "api_calls": 0,
                    "monthly_active_users": 0
                },
                "player_profiles":true,
                "analytics":true,
                "iap_checking":true,
                "server_code":true,
                "content_management":true,
                "constraints":{
                    "mau":1000
                }
            },
            "indie":{
                "cost":{
                    "monthly_charge": 99,
                    "api_calls": 0,
                    "monthly_active_users": 0
                },
                "player_profiles":true,
                "analytics":true,
                "iap_checking":true,
                "server_code":true,
                "content_management":true,
                "constraints":{
                    "monthly_active_users":100000
                }
            },
            "professional":{
                "cost":{
                    "monthly_charge": 299,
                    "api_calls": 0,
                    "monthly_active_users": 0.008
                },
                "player_profiles":true,
                "analytics":true,
                "iap_checking":true,
                "server_code":true,
                "content_management":true,
                "constraints":{
                }
            }
        }
    },
    "gamesparks":{
        "www":"https://www.gamesparks.com/",
        "pricing":{
            "_link":"https://www.gamesparks.com/pricing/",
            "standard":{
                "cost":{
                    "monthly_charge": 299,
                    "api_calls": 0,
                    "monthly_active_users": {
                        "cost": 0.008,
                        "above_mau": 37375
                    }
                },
                "player_profiles":true,
                "analytics":true,
                "iap_checking":true,
                "server_code":true,
                "content_management":true,
                "constraints":{
                    "concurrent_users":10000,
                    "fair_use": {
                        "api_calls": 5000,
                        "data_pu": "20mb",
                        "bandwidth_pu": "10mb"
                    }
                }
            }
        }
    },
    "app42":{
        "www":"http://api.shephertz.com/",
        "pricing":{
            "_link":"http://api.shephertz.com/pricing.php",
            "free": {
                "constraints":{
                    "api_calls": 1000000,
                    "bandwidth": "1gb",
                    "storage": "1gb"
                }
            },
            "medium": {
                "constraints":{
                    "api_calls": 15000000,
                    "bandwidth": "15gb",
                    "storage": "15gb"
                }
            }
        }
    },
    "xtralife":{
        "www":"https://xtralife.cloud/"
    },
    "heroiclabs":{
        "www":"https://heroiclabs.com/",
        "tech":"namaka"
    },
    "gamua":{
        "www":"https://gamua.com/"
    },
    "back4app":{
        "www":"https://www.back4app.com/",
        "tech":"parse"
    },
    "buddy":{
        "www":"https://buddy.com/"
    },
    "kinvey":{
        "www":"https://www.progress.com/kinvey"
    },
    "kumulos":{
        "www":"https://www.kumulos.com/"
    },
    "kii":{
        "www":"https://www.kiimobiletech.com/"
    },
    "aws":{
        "www":"https://aws.amazon.com/"
    },
    "firebase":{
        "www":"https://firebase.google.com/"
    },
    "chilliconnect":{
        "www": "https://www.chilliconnect.com/"
    }
};
