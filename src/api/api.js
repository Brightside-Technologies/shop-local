import addDays from "date-fns/add_days";
import format from "date-fns/format";
import addMinutes from "date-fns/add_minutes";

export function getUnits(facilityId) {
    let facilityUnits = { Data: null };
    const units = {
        Data: [
            {
                Value: "DOU",
                Text: "DOU"
            },
            {
                Value: "ED",
                Text: "ED"
            },
            {
                Value: "ICU",
                Text: "ICU"
            },
            {
                Value: "Med Surg",
                Text: "Med Surg"
            },
            {
                Value: "Tele",
                Text: "Tele"
            },
            {
                Value: "Oncology",
                Text: "Oncology"
            }
        ]
    };

    switch (facilityId) {
        case "1":
            facilityUnits.Data = [
                {
                    Value: "1",
                    Text: "DOU"
                },
                {
                    Value: "2",
                    Text: "ED"
                },
                {
                    Value: "3",
                    Text: "ICU"
                },
                {
                    Value: "4",
                    Text: "Med Surg"
                },
                {
                    Value: "5",
                    Text: "Tele"
                },
                {
                    Value: "6",
                    Text: "Oncology"
                }
            ];
            break;
        case "2":
            facilityUnits.Data = [
                {
                    Value: "7",
                    Text: "LD"
                },
                {
                    Value: "8",
                    Text: "ER"
                },
                {
                    Value: "9",
                    Text: "NICU"
                },
                {
                    Value: "10",
                    Text: "OR"
                },
                {
                    Value: "11",
                    Text: "Mother Baby"
                },
                {
                    Value: "12",
                    Text: "Oncology"
                }
            ];
            break;
        case "3":
            facilityUnits.Data = [
                {
                    Value: "13",
                    Text: "ICU"
                },
                {
                    Value: "14",
                    Text: "ER"
                },
                {
                    Value: "15",
                    Text: "Psych"
                },
                {
                    Value: "16",
                    Text: "OR"
                }
            ];
            break;
        default:
            facilityUnits = units;
    }
    return new Promise((resolve, reject) => {
        resolve(facilityUnits);
    });
}

export function getFloatReasons() {
    const floatReasons = {
        Data: [
            {
                Value: "Low Census Current Unit",
                Text: "Low Census Current Unit"
            },
            {
                Value: "High Census Float Unit",
                Text: "High Census Float Unit"
            },
            {
                Value: "Needed Expertise",
                Text: "Needed Expertise"
            },
            {
                Value: "Other",
                Text: "Other"
            }
        ]
    };
    return new Promise((resolve, reject) => {
        resolve(floatReasons);
    });
}

export function getScheduledStaff(unitId) {
    const getRadomDate = () => {
        return format(
            addDays(new Date(), Math.floor(Math.random() * 6)),
            "MM/DD/YYYY"
        );
    };
    const scheduledStaff = {
        Data: [
            {
                name: "Jordan, Lisa",
                license: "RN",
                status: "Scheduled",
                verificationDate: "05/13/2019",
                shift: "07:00 - 19:30",
                unit: "ICU",
                shiftsWorked: 15,
                uxpMatch: 103,
                scheduledDate: getRadomDate()
            },
            {
                name: "Nelson, Joy",
                license: "RN",
                status: "Scheduled",
                verificationDate: "05/13/2019",
                shift: "07:00 - 19:30",
                unit: "ICU",
                shiftsWorked: 13,
                uxpMatch: 101,
                scheduledDate: getRadomDate()
            },
            {
                name: "Morris, Peter",
                license: "RN",
                status: "Scheduled",
                verificationDate: "05/13/2019",
                shift: "07:00 - 19:30",
                unit: "ICU",
                shiftsWorked: 10,
                uxpMatch: 100,
                scheduledDate: getRadomDate()
            },
            {
                name: "Roberts, Mary",
                license: "LVN",
                status: "Scheduled",
                verificationDate: "05/13/2019",
                shift: "07:00 - 19:30",
                unit: "ICU",
                shiftsWorked: 5,
                uxpMatch: 100,
                scheduledDate: getRadomDate()
            },
            {
                name: "Bernal, Diego",
                license: "RN",
                status: "Scheduled",
                verificationDate: "05/13/2019",
                shift: "07:00 - 19:30",
                unit: "ICU",
                shiftsWorked: 5,
                uxpMatch: 100,
                scheduledDate: getRadomDate()
            }
        ]
    };
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(scheduledStaff);
        }, 1000);
    });
}

export function getBookedStaff(unitId) {
    const getRadomDate = () => {
        return format(
            addDays(new Date(), Math.floor(Math.random() * 6)),
            "MM/DD/YYYY"
        );
    };
    const scheduledStaff = {
        Data: [
            {
                name: "Stark, Sansa",
                license: "RN",
                licenseVerificationDate: "04/29/2019",
                qRating: "1.2.1",
                shift: "07:00 - 19:30",
                unit: "ICU",
                shiftsWorked: 15,
                uxpMatch: 103,
                scheduledDate: getRadomDate()
            },
            {
                name: "Lannister, Carsei",
                license: "RN",
                licenseVerificationDate: "04/29/2019",
                qRating: "2.2.1",
                shift: "07:00 - 19:30",
                unit: "ICU",
                shiftsWorked: 15,
                uxpMatch: 103,
                scheduledDate: getRadomDate()
            },
            {
                name: "Stark, Sansa",
                license: "RN",
                licenseVerificationDate: "04/29/2019",
                qRating: "2.2.1",
                shift: "07:00 - 19:30",
                unit: "ICU",
                shiftsWorked: 15,
                uxpMatch: 103,
                scheduledDate: getRadomDate()
            }
        ]
    };
    return new Promise((resolve, reject) => {
        resolve(scheduledStaff);
    });
}

export function getAvailableStaff(unitId) {
    const getRadomDate = () => {
        return format(
            addDays(new Date(), Math.floor(Math.random() * 6)),
            "MM/DD/YYYY"
        );
    };
    const availableStaff = {
        Data: [
            {
                name: "Smith, Susan",
                license: "RN",
                licenseVerificationDate: "04/29/2019",
                qRating: "1.2.1",
                shift: "07:00 - 19:30",
                unit: "ICU",
                shiftsWorked: 15,
                uxpMatch: 103,
                scheduledDate: getRadomDate()
            },
            {
                name: "Garcia, Ariana",
                license: "RN",
                licenseVerificationDate: "04/29/2019",
                qRating: "2.2.1",
                shift: "07:00 - 19:30",
                unit: "ICU",
                shiftsWorked: 15,
                uxpMatch: 103,
                scheduledDate: getRadomDate()
            },
            {
                name: "Hopkins, Jon",
                license: "RN",
                licenseVerificationDate: "04/29/2019",
                qRating: "2.2.1",
                shift: "07:00 - 19:30",
                unit: "ICU",
                shiftsWorked: 15,
                uxpMatch: 103,
                scheduledDate: getRadomDate()
            },
            {
                name: "Thorn, Tracy",
                license: "RN",
                licenseVerificationDate: "04/29/2019",
                qRating: "2.2.1",
                shift: "07:00 - 19:30",
                unit: "ICU",
                shiftsWorked: 15,
                uxpMatch: 103,
                scheduledDate: getRadomDate()
            }
        ]
    };
    return new Promise((resolve, reject) => {
        resolve(availableStaff);
    });
}

export function floatStaff(staffId) {
    return new Promise((resolve, reject) => {
        resolve({
            Data: {
                status: 200
            },
            ErrorDetails: []
        });
    });
}

export function getFacilities(facilityId) {
    const facs = {
        Data: [
            {
                Value: "1",
                Text: "ESP Medical Center"
            },
            {
                Value: "2",
                Text: "RL Regional"
            },
            {
                Value: "3",
                Text: "PCA Healthcare"
            }
        ]
    };
    return new Promise((resolve, reject) => {
        resolve(facs);
    });
}

export function getDashboardData(facilityId, unitId = "-1") {
    const data = { Data: null };
    switch (unitId) {
        case "-1":
            switch (facilityId) {
                case "1":
                case "3":
                    data.Data = {
                        FlexDirectData: {
                            ScheduledCore: 8,
                            ScheduledVariable: 6,
                            AdaptiveShifts: 5,
                            FlexedShifts: 2
                        },

                        CensusData: {
                            CurrentCensus: 67,
                            PreviousCensus: 12
                        },
                        OvertimeData: {
                            CurrentOvertime: "7,641",
                            PreviousOvertime: "6,524"
                        },
                        HoursData: {
                            FixedPercentage: 56,
                            VariablePercentage: 34
                        }
                    };
                    break;
                case "2":
                    data.Data = {
                        FlexDirectData: {
                            ScheduledCore: 13,
                            ScheduledVariable: 6,
                            AdaptiveShifts: 3,
                            FlexedShifts: 2
                        },

                        CensusData: {
                            CurrentCensus: 57,
                            PreviousCensus: 72
                        },
                        OvertimeData: {
                            CurrentOvertime: "4,641",
                            PreviousOvertime: "3,524"
                        },
                        HoursData: {
                            FixedPercentage: 86,
                            VariablePercentage: 34
                        }
                    };
                    break;
                default:
                    data.Data = {
                        FlexDirectData: {
                            ScheduledCore: 12,
                            ScheduledVariable: 5,
                            AdaptiveShifts: 2,
                            FlexedShifts: 1
                        },

                        CensusData: {
                            CurrentCensus: 47,
                            PreviousCensus: 62
                        },
                        OvertimeData: {
                            CurrentOvertime: "5,641",
                            PreviousOvertime: "6,524"
                        },
                        HoursData: {
                            FixedPercentage: 76,
                            VariablePercentage: 24
                        }
                    };
            }
            break;
        case "1":
        case "4":
        case "7":
        case "10":
        case "13":
            data.Data = {
                FlexDirectData: {
                    ScheduledCore: 12,
                    ScheduledVariable: 5,
                    AdaptiveShifts: 2,
                    FlexedShifts: 1
                },

                CensusData: {
                    CurrentCensus: 47,
                    PreviousCensus: 62
                },
                OvertimeData: {
                    CurrentOvertime: "5,641",
                    PreviousOvertime: "6,524"
                },
                HoursData: {
                    FixedPercentage: 76,
                    VariablePercentage: 24
                }
            };
            break;
        case "2":
        case "5":
        case "8":
        case "11":
        case "14":
            data.Data = {
                FlexDirectData: {
                    ScheduledCore: 15,
                    ScheduledVariable: 3,
                    AdaptiveShifts: 3,
                    FlexedShifts: 2
                },

                CensusData: {
                    CurrentCensus: 25,
                    PreviousCensus: 45
                },
                OvertimeData: {
                    CurrentOvertime: "263",
                    PreviousOvertime: "1,201"
                },
                HoursData: {
                    FixedPercentage: 80,
                    VariablePercentage: 26
                }
            };
            break;
        case "3":
        case "6":
        case "9":
        case "12":
        case "15":
            data.Data = {
                FlexDirectData: {
                    ScheduledCore: 16,
                    ScheduledVariable: 8,
                    AdaptiveShifts: 3,
                    FlexedShifts: 3
                },

                CensusData: {
                    CurrentCensus: 99,
                    PreviousCensus: 80
                },
                OvertimeData: {
                    CurrentOvertime: "2,145",
                    PreviousOvertime: "3,145"
                },
                HoursData: {
                    FixedPercentage: 66,
                    VariablePercentage: 15
                }
            };
            break;
        default:
            data.Data = {
                FlexDirectData: {
                    ScheduledCore: 12,
                    ScheduledVariable: 5,
                    AdaptiveShifts: 2,
                    FlexedShifts: 1
                },

                CensusData: {
                    CurrentCensus: 47,
                    PreviousCensus: 62
                },
                OvertimeData: {
                    CurrentOvertime: "5,641",
                    PreviousOvertime: "6,524"
                },
                HoursData: {
                    FixedPercentage: 76,
                    VariablePercentage: 24
                }
            };
    }
    return new Promise((resolve, reject) => {
        resolve(data);
    });
}

export function getCancelTypes() {
    const cancelTypes = {
        Data: [
            {
                Value: 1,
                Text: "Facility"
            },
            {
                Value: 2,
                Text: "Agency"
            },
            {
                Value: 3,
                Text: "Employee"
            }
        ]
    };
    return new Promise((resolve, reject) => {
        resolve(cancelTypes);
    });
}

export function getCancelReasons() {
    const cancelReasons = {
        Data: [
            {
                Value: 1,
                Text: "Low Census"
            },
            {
                Value: 2,
                Text: "No Call/No Show"
            },
            {
                Value: 3,
                Text: "Will Not Float"
            },
            {
                Value: 4,
                Text: "Ill"
            },
            {
                Value: 5,
                Text: "Call Off, Not Ill"
            },
            {
                Value: 6,
                Text: "Sick Family"
            },
            {
                Value: 4,
                Text: "Other"
            }
        ]
    };
    return new Promise((resolve, reject) => {
        resolve(cancelReasons);
    });
}

export function cancelStaff() {
    return new Promise((resolve, reject) => {
        resolve({
            Data: {
                status: 200
            },
            ErrorDetails: []
        });
    });
}

export function getTransactionLog() {
    const getRadomDate = () => {
        return format(
            addDays(new Date(), Math.floor(Math.random() * 6)),
            "MM/DD/YYYY"
        );
    };
    const getRandomTime = () => {
        return format(
            addMinutes(new Date(), Math.floor(Math.random() * 100)),
            "hh:mm"
        );
    };
    const transactionLog = {
        Data: [
            {
                date: getRadomDate(),
                time: getRandomTime(),
                unit: "ICU",
                nurse: "Lisa Jordan",
                agent: "D. Hathaway",
                action: "Flex On Time",
                reason: "Low Census"
            },
            {
                date: getRadomDate(),
                time: getRandomTime(),
                unit: "TELE",
                nurse: "Jon Hopkins",
                agent: "D. Rugama",
                action: "Shift Confirmed",
                reason: "Ill"
            },
            {
                date: getRadomDate(),
                time: getRandomTime(),
                unit: "MedSurg",
                nurse: "Karen Daniels",
                agent: "R. Ortiz",
                action: "Staff CX",
                reason: "Ill"
            },
            {
                date: getRadomDate(),
                time: getRandomTime(),
                unit: "ICU",
                nurse: "Maria Diaz",
                agent: "C. Rugama",
                action: "Float to TELE",
                reason: "Low Census"
            },
            {
                date: getRadomDate(),
                time: getRandomTime(),
                unit: "L&D",
                nurse: "Carl Hernandez",
                agent: "D. Hathaway",
                action: "Hospital CX",
                reason: "No Call/No Show"
            }
        ]
    };
    return new Promise((resolve, reject) => {
        resolve(transactionLog);
    });
}
