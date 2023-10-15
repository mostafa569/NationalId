function extractInformation(nationalId) {
    if (nationalId.length !== 14) {
      console.log('Invalid national ID number');
      return;
    }
  
    const century = nationalId[0] === '2' ? '19' : '20';
    const birthYear = nationalId.slice(1, 3);
    const birthMonth = nationalId.slice(3, 5);
    const birthDay = nationalId.slice(5, 7);
    const governorateCode = nationalId.slice(7, 9);
    const sequenceNumber = nationalId.slice(9, 13);
    const checkDigit = nationalId[13];
  
    const governmentGovernorates = {
      '01': 'Cairo',
      '02': 'Alexandria',
      '03': 'Port Said',
      '04': 'Suez',
      '11': 'Damietta',
      '12': 'Dakahlia',
      '13': 'Ash Sharqia',
      '14': 'Kaliobeya',
      '15': 'Kafr El - Sheikh',
      '16': 'Gharbia',
      '17': 'Monoufia',
      '18': 'El Beheira',
      '19': 'Ismailia',
      '21': 'Giza',
      '22': 'Beni Suef',
      '23': 'Fayoum',
      '24': 'El Menia',
      '25': 'Assiut',
      '26': 'Sohag',
      '27': 'Qena',
      '28': 'Aswan',
      '29': 'Luxor',
      '31': 'Red Sea',
      '32': 'New Valley',
      '33': 'Matrouh',
      '34': 'North Sinai',
      '35': 'South Sinai',
      '88': 'Foreign'
    };
  
    const governorate = governmentGovernorates[governorateCode];
  
    // Calculate age
    let age = new Date().getFullYear() - parseInt(birthYear);
    if (nationalId[0] === '2') {
      age += 100;
    }
    age = String(age).slice(2, 4);
  
    // Print all extracted information
    console.log('Century:', century);
    console.log('Birth Year:', birthYear);
    console.log('Birth Month:', birthMonth);
    console.log('Birth Day:', birthDay);
    console.log('Governorate Code:', governorateCode);
    console.log('Governorate:', governorate);
    console.log('Sequence Number:', sequenceNumber);
    console.log('Check Digit:', checkDigit);
    console.log('Age:', age);
  }
  
  extractInformation('30205101700718');
  