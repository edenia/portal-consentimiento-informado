const USER_TEST = [
  {
    name: 'Pedro González Leiva',
    ced: '1-2054-0549',
    username: 'pedrogonzlei',
    password: 'portal0000',
    consent: {
      accessToMedicalData: {
        status: false,
        updatedTo: 'Sun Aug 10 2020 12:00:00'
      },
      accessToMedicalDataThirdParties: {
        status: false,
        updatedTo: 'Sun Aug 10 2020 18:30:21'
      },
      accessToMedicalRecord: {
        status: false,
        updatedTo: 'Sun Aug 16 2020 16:06:54'
      },
      accessToMedicalRecordThirdParties: {
        status: true,
        updatedTo: 'Sun Aug 12 2020 12:00:00'
      }
    },
    history: {
      accessToMedicalData: [
        {
          status: false,
          updatedTo: 'Sun Aug 10 2020 12:00:00'
        },
        {
          status: false,
          updatedTo: 'Sun Aug 10 2020 10:00:00'
        },
        {
          status: true,
          updatedTo: 'Sun Aug 9 2020 12:00:00'
        }
      ],
      accessToMedicalDataThirdParties: [
        {
          status: false,
          updatedTo: 'Sun Aug 10 2020 18:30:21'
        },
        {
          status: true,
          updatedTo: 'Sun Aug 10 2020 10:00:00'
        },
        {
          status: false,
          updatedTo: 'Sun Aug 9 2020 12:00:00'
        }
      ],
      accessToMedicalRecord: [
        {
          status: false,
          updatedTo: 'Sun Aug 16 2020 16:06:54'
        }
      ],
      accessToMedicalRecordThirdParties: [
        {
          status: true,
          updatedTo: 'Sun Aug 12 2020 12:00:00'
        }
      ]
    }
  },
  {
    name: 'Nancy Castillo Mora',
    ced: '1-0870-0237',
    username: 'nancycasmor',
    password: 'portal0000',
    consent: {
      accessToMedicalData: {
        status: false,
        updatedTo: 'Sun Aug 11 2020 11:06:54'
      },
      accessToMedicalDataThirdParties: {
        status: false,
        updatedTo: 'Sun Aug 11 2020 16:00:00'
      },
      accessToMedicalRecord: {
        status: false,
        updatedTo: 'Sun Aug 11 2020 16:06:54'
      },
      accessToMedicalRecordThirdParties: {
        status: true,
        updatedTo: 'Sun Aug 10 2020 09:00:00'
      }
    },
    history: {
      accessToMedicalData: [
        {
          status: false,
          updatedTo: 'Sun Aug 11 2020 11:06:54'
        },
        {
          status: false,
          updatedTo: 'Sun Aug 9 2020 10:00:00'
        },
        {
          status: true,
          updatedTo: 'Sun Aug 3 2020 15:30:00'
        }
      ],
      accessToMedicalDataThirdParties: [
        {
          status: false,
          updatedTo: 'Sun Aug 11 2020 11:06:54'
        },
        {
          status: false,
          updatedTo: 'Sun Aug 9 2020 10:00:00'
        }
      ],
      accessToMedicalRecord: [
        {
          status: false,
          updatedTo: 'Sun Aug 11 2020 11:06:54'
        },
        {
          status: true,
          updatedTo: 'Sun Aug 9 2020 10:00:00'
        },
        {
          status: false,
          updatedTo: 'Sun Aug 3 2020 15:30:00'
        }
      ],
      accessToMedicalRecordThirdParties: [
        {
          status: false,
          updatedTo: 'Sun Aug 11 2020 11:06:54'
        },
        {
          status: true,
          updatedTo: 'Sun Aug 9 2020 10:00:00'
        }
      ]
    }
  }
]

const handleFakeLogin = (data) => {
  if (!data.username || !data.password) return false

  const user = USER_TEST.find(
    ({ username, password }) =>
      username === data.username && password === data.password
  )

  if (user) {
    localStorage.setItem('user', JSON.stringify(user))

    return true
  }

  return false
}

export default handleFakeLogin
