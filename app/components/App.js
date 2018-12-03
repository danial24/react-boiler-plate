import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as routes from '../routes';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const THEME_COLORS = {
    redColor : "#be0e0a",
    greyColor : "#7b8397",
    lightBlue : "#4691e1",
    pink : "#c62470",
    textColor : "#233c7b",
  
  };

const palette = {
    secondary1Color: THEME_COLORS.textColor,
    accent1Color: THEME_COLORS.lightBlue,
    primary1Color: "#4691e1",
  
    primary2Color: THEME_COLORS.greyColor,
    accent2Color: "#5a6480",
  
    primary3Color: "#1fc055",
    accent3Color: "#259b23",
    redColor: THEME_COLORS.redColor,
  };
  const muiTheme = createMuiTheme({
    overrides: {
      MuiCircularProgress: {
        root: {
          color: palette.accent1Color
        }
      },
      MuiTabs: {
        root: {
          backgroundColor: "#E8EDF8",
          color: palette.secondary1Color,
        }
      },
      MuiTab: {
        root: {
          fontSize: 14,
        }
      },
      MuiIcon: {
        root: {
          color: '#fff'
        }
      },
      MuiRadio: {
        root: {
          color: palette.primary2Color,
          '&$checked': {
            color: palette.accent1Color
          },
        },
      },
      MuiCheckbox: {
        root: {
          color: palette.primary2Color,
          '&$checked': {
            color: palette.accent1Color
          },
        },
      },
      MuiFormControlLabel: {
        label: {
          color: palette.accent2Color,
          fontSize: 14
        }
      },
      MuiButton: {
        fab: {
          backgroundColor: palette.redColor,
          color: '#fff'
        },
        text: {
          color: palette.accent1Color
        }
      },
      MuiListItemText: {
        primary: {
          color: palette.accent2Color,
          fontSize: 15
        }
      },
      MuiLinearProgress: {
        barColorPrimary: {
          backgroundColor: palette.accent1Color,
        },
        colorPrimary: {
          backgroundColor: '#f0f0f0'
        }
      },
      MuiTextField: {
  
      },
      MuiInput: {
        root: {
          fontSize: 16,
        },
        underline: {
          '&:after': {
            borderBottomColor: palette.accent1Color,
          }
        }
      },
      MuiFormLabel: {
        root: {
          color: palette.accent1Color,
          "&$focused": {
            color: palette.accent1Color,
          }
        }
      },
      MuiBadge: {
        badge: {
          color: '#fff',
          background: palette.redColor,
          fontSize: 12,
          width: 16,
          height: 16
        }
      },
  
      MuiDialogTitle: {
        root: {
          padding: 0,
        }
      },
  
      MuiDialogContent: {
        root: {
          padding: 20,
          color: '#666',
          position: 'relative'
        }
      },
      MuiDialogActions: {
        root: {
          margin: 0
        },
        action: {
          margin: 0
        },
      },
    },
    typography: {
      useNextVariants: true,
    },
  });

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <MuiThemeProvider theme={muiTheme}>
                <div id="maincanvas" className="maincanvas">
                    <Switch>
                        {routes.childRoutesArray.map(function (item, index) {
                            return <Route key={index} exact path={item.path} component={item.component} />
                        })}
                    </Switch>
                </div>
            </MuiThemeProvider>

        );
    }

}