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
                    "monthly_active_users": 0,
                    "constraints":{
                        "monthly_active_users":1000
                    }
                },
                "player_profiles":true,
                "analytics":true,
                "iap_checking":true,
                "server_code":true,
                "push_notifications":false
            },
            "indie":{
                "cost":{
                    "monthly_charge": 99,
                    "api_calls": 0,
                    "monthly_active_users": 0,
                    "constraints":{
                        "monthly_active_users":100000
                    }
                },
                "player_profiles":true,
                "analytics":true,
                "iap_checking":true,
                "server_code":true,
                "push_notifications":false
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
                "push_notifications":false
            }
        }
    },
    "app42":{
        "www":"http://api.shephertz.com/",
        "pricing":{
            "_link":"http://api.shephertz.com/pricing.php",
            "free": {
                "push_notifications":true,
                "constraints":{
                    "api_calls": 1000000,
                    "bandwidth": "1gb",
                    "storage": "1gb"
                }
            },
            "medium": {
                "push_notifications":true,
                "cost":{
                    "monthly_charge": 100,
                    "monthly_active_users": 0,
                    "constraints":{
                        "api_calls": 15000000,
                        "bandwidth": "15gb",
                        "storage": "15gb"
                    }
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
                    },
                    "constraints":{
                        "concurrent_users":10000,
                        "fair_use": {
                            "api_calls": 5000,
                            "data_pu": "20mb",
                            "bandwidth_pu": "10mb"
                        }
                    }
                },
                "player_profiles":true,
                "analytics":true,
                "iap_checking":true,
                "server_code":true,
                "push_notifications":false
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
        "www":"https://gamua.com/",
        "tech":"flox",
        "pricing": {
            "_link":"https://gamua.com/flox/pricing/",
            "Lone Wolf": {
                "push_notifications":false,
                "analytics":true,
                "iap_checking":false,
                "cost":{
                    "monthly_charge": 29,
                    "monthly_active_users": 0,
                    "carry_over": true,
                    "constraints":{
                        "api_calls": 2000000
                    }
                }
            },
            "Indie": {
                "push_notifications":false,
                "analytics":true,
                "iap_checking":false,
                "cost":{
                    "monthly_charge": 99,
                    "monthly_active_users": 0,
                    "carry_over": true,
                    "constraints":{
                        "api_calls": 8000000
                    }
                }
            }
        }
    },
    "back4app":{
        "www":"https://www.back4app.com/",
        "tech":"parse"
    },
    "buddy":{
        "www":"https://buddy.com/"
    },
    "kinvey":{
        "www":"https://www.progress.com/kinvey",
        "pricing": {
            "_link":"https://www.progress.com/kinvey/pricing",
            "Business Edition": {
                "server_code":true,
                "push_notifications":false,
                "cost":{
                    "monthly_charge": 4995,
                    "monthly_active_users": 0
                }
            }
        }
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
        "www":"https://firebase.google.com/",
        "pricing":{
            "_link":"https://www.chilliconnect.com/pricing/",
            "Spark Plan": {
                "analytics":true,
                "push_notifications":true,
                "server_code":true,
                "cost":{
                    "monthly_charge": 0,
                    "monthly_active_users": 0
                },
                "constraints":{
                    "api_calls": 125000
                }
            },
            "Flame Plan": {
                "analytics":true,
                "push_notifications":true,
                "server_code":true,
                "cost":{
                    "monthly_charge": 25,
                    "monthly_active_users": 0
                },
                "constraints":{
                    "api_calls": 2000000
                }
            }
        }
    },
    "chilliconnect":{
        "www": "https://www.chilliconnect.com/",
        "pricing":{
            "_link":"https://www.chilliconnect.com/pricing/",
            "Indie": {
                "push_notifications":false,
                "cost":{
                    "monthly_charge": 49,
                    "monthly_active_users": 0
                },
                "constraints":{
                    "api_calls": 1000000
                }
            },
            "Start Up": {
                "push_notifications":false,
                "cost":{
                    "monthly_charge": 249,
                    "monthly_active_users": 0
                },
                "constraints":{
                    "api_calls": 2000000
                }
            }
        }
    }
};
