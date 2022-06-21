import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { data } from '../data';
import Popup from './MiniTablePopup';
import { Box, LinearProgress, Tooltip } from '@mui/material';
import { ShownValueSelect } from './ShownValueSelect';



const MainTable = ({regions, handleMiniTableOpen}) => {
  const [isDateSelected, setIsDateSelected] = React.useState(true)
  const toggleSelected = (show) => {
    if(show === "show date") {
      setIsDateSelected(true)
    } else {
      setIsDateSelected(false)
    }
  }
 

  return (
    <React.Fragment>
      <TableContainer component={Paper} elevation={12} sx={{ marginTop: "50px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">
                {!regions.length
                  ?
                  <LinearProgress value={100} />
                  :
                  <ShownValueSelect toggleSelected={toggleSelected} />
                }
              </TableCell>
              <TableCell align="center" colSpan={3}>
                2017
              </TableCell>
              <TableCell align="center" colSpan={3}>
                2018
              </TableCell>
              <TableCell align="center" colSpan={3}>
                2019
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>region</TableCell>
              <TableCell align="center">xx</TableCell>
              <TableCell align="center">yy</TableCell>
              <TableCell align="center">zz</TableCell>
              <TableCell align="center">xx</TableCell>
              <TableCell align="center">yy</TableCell>
              <TableCell align="center">zz</TableCell>
              <TableCell align="center">xx</TableCell>
              <TableCell align="center">yy</TableCell>
              <TableCell align="center">zz</TableCell>
            </TableRow>

          </TableHead>
          
          <TableBody>
          
            {regions?.map((el) => (
              <TableRow
                key={el.region}
                sx={{ "&:last-child td, &:last-child th": { border: 0 }}}
              >
                <TableCell component="th" scope="row">
                  {el.region}
                </TableCell>
                <Tooltip
                  placement='top'
                  arrow enterDelay={500}
                  leaveDelay={200}
                  title={el?.year2017XX[el.year2017XX.length - 1]?.name
                    ? el?.year2017XX[el.year2017XX.length - 1]?.name
                    : "User name: undefined"}
                  >
                  <TableCell
                    onClick={() => handleMiniTableOpen(el?.year2017XX, "year2017XX", el?.id)}
                    align="center"
                  >
                    {!isDateSelected
                      ? el?.year2017XX[el.year2017XX.length - 1]?.value || "---"
                      : el?.year2017XX[el.year2017XX.length - 1]?.date || "---"
                    }
                  </TableCell>
                </Tooltip>
                <Tooltip
                  placement='top'
                  arrow enterDelay={500}
                  leaveDelay={200}
                  title={el?.year2017YY[el.year2017YY.length - 1]?.name
                    ? el?.year2017YY[el.year2017YY.length - 1]?.name
                    : "User name: undefined"}
                >
                  <TableCell
                    onClick={() => handleMiniTableOpen(el?.year2017YY, "year2017YY", el?.id)}
                    align="center"
                  >
                    {!isDateSelected
                      ? el?.year2017YY[el.year2017YY.length - 1]?.value || "---"
                      : el?.year2017YY[el.year2017YY.length - 1]?.date || "---"
                    }
                  </TableCell>
                </Tooltip>
                <Tooltip
                  placement='top'
                  arrow enterDelay={500}
                  leaveDelay={200}
                  title={el?.year2017ZZ[el.year2017ZZ.length - 1]?.name
                    ? el?.year2017ZZ[el.year2017ZZ.length - 1]?.name
                    : "User name: undefined"}
                >
                  <TableCell
                    onClick={() => handleMiniTableOpen(el?.year2017ZZ, "year2017ZZ", el?.id)}
                    align="center"
                  >
                    {!isDateSelected
                      ? el?.year2017ZZ[el.year2017ZZ.length - 1]?.value || "---"
                      : el?.year2017ZZ[el.year2017ZZ.length - 1]?.date || "---"
                    }
                  </TableCell>
                </Tooltip>
                <Tooltip
                  placement='top'
                  arrow enterDelay={500}
                  leaveDelay={200}
                  title={el?.year2018XX[el.year2018XX.length - 1]?.name
                    ? el?.year2018XX[el.year2018XX.length - 1]?.name
                    : "User name: undefined"}
                >
                  <TableCell
                    onClick={() => handleMiniTableOpen(el?.year2018XX, "year2018XX", el?.id)}
                    align="center"
                  >
                    {!isDateSelected
                      ? el?.year2018XX[el.year2018XX.length - 1]?.value || "---"
                      : el?.year2018XX[el.year2018XX.length - 1]?.date || "---"
                    }
                  </TableCell>
                </Tooltip>
                <Tooltip
                  placement='top'
                  arrow enterDelay={500}
                  leaveDelay={200}
                  title={el?.year2018YY[el.year2018YY.length - 1]?.name
                    ? el?.year2018YY[el.year2018YY.length - 1]?.name
                    : "User name: undefined"}
                >
                  <TableCell
                    onClick={() => handleMiniTableOpen(el?.year2018YY, "year2018YY", el?.id)}
                    align="center"
                  >
                    {!isDateSelected
                      ? el?.year2018YY[el.year2018YY.length - 1]?.value || "---"
                      : el?.year2018YY[el.year2018YY.length - 1]?.date || "---"
                    }
                  </TableCell>
                </Tooltip>
                <Tooltip
                  placement='top'
                  arrow enterDelay={500}
                  leaveDelay={200}
                  title={el?.year2018ZZ[el.year2018ZZ.length - 1]?.name
                    ? el?.year2018ZZ[el.year2018ZZ.length - 1]?.name
                    : "User name: undefined"}
                  >
                  <TableCell
                    onClick={() => handleMiniTableOpen(el?.year2018ZZ, "year2018ZZ", el?.id)}
                    align="center"
                  >
                    {!isDateSelected
                      ? el?.year2018ZZ[el.year2018ZZ.length - 1]?.value || "---"
                      : el?.year2018ZZ[el.year2018ZZ.length - 1]?.date || "---"
                    }
                  </TableCell>
                </Tooltip>
                <Tooltip
                  placement='top'
                  arrow enterDelay={500}
                  leaveDelay={200}
                  title={el?.year2019XX[el.year2019XX.length - 1]?.name
                    ? el?.year2019XX[el.year2019XX.length - 1]?.name
                    : "User name: undefined"}
                  >
                  <TableCell
                    onClick={() => handleMiniTableOpen(el?.year2019XX, "year2019XX", el?.id)}
                    align="center"
                  >
                    {!isDateSelected
                      ? el?.year2019XX[el.year2019XX.length - 1]?.value || "---"
                      : el?.year2019XX[el.year2019XX.length - 1]?.date || "---"
                    }
                  </TableCell>
                </Tooltip>
                <Tooltip
                  placement='top'
                  arrow enterDelay={500}
                  leaveDelay={200}
                  title={el?.year2019YY[el.year2019YY.length - 1]?.name
                    ? el?.year2019YY[el.year2019YY.length - 1]?.name
                    : "User name: undefined"}
                  >
                  <TableCell
                    onClick={() => handleMiniTableOpen(el?.year2019YY, "year2019YY", el?.id)}
                    align="center"
                  >
                    {!isDateSelected
                      ? el?.year2019YY[el.year2019YY.length - 1]?.value || "---"
                      : el?.year2019YY[el.year2019YY.length - 1]?.date || "---"
                    }
                  </TableCell>
                </Tooltip>
                <Tooltip
                  placement='top'
                  arrow enterDelay={500}
                  leaveDelay={200}
                  title={el?.year2019ZZ[el.year2019ZZ.length - 1]?.name
                    ? el?.year2019ZZ[el.year2019ZZ.length - 1]?.name
                    : "User name: undefined"}
                  >
                  <TableCell
                    onClick={() => handleMiniTableOpen(el?.year2019ZZ, "year2019ZZ", el?.id)}
                    align="center"
                  >
                    {!isDateSelected
                      ? el?.year2019ZZ[el.year2019ZZ.length - 1]?.value || "---"
                      : el?.year2019ZZ[el.year2019ZZ.length - 1]?.date || "---"
                    }
                  </TableCell>
                </Tooltip>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  )
}
export default MainTable