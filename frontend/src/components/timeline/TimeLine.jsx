import React from 'react'
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const TimeLine = ({ timelines = [] }) => {
    return (
        <div>
            <Timeline position="alternate">{
                timelines.map((item, index) => (
                    <TimelineItem key={index}>
                        <TimelineOppositeContent sx={{m:"auto 0"}}
                            align ="right"
                            variant="body2"
                            color="text.secondary">
                            7/15/2023
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            {/* to craete line that will separate date and title  */}
                            <TimelineConnector></TimelineConnector>
                            <TimelineDot>

                                <Event/>

                            </TimelineDot>
                            <TimelineConnector></TimelineConnector>
                        </TimelineSeparator>
                        <TimelineContent sx={{py:"12px", px:2}}>
                            <Typography variant="h6">Title</Typography>
                            <Typography >Sub - Title</Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))
            }</Timeline>
        </div>
    )
}

export default TimeLine