export interface User {

        
          id:number;
          role: string;
          email: string;
          gender: string;
          phone: string;
          age: string;
          securityQuestions: {
            firstSchoolName: string,
            childhoodNickname: string,
            motherMiddleName: string
          },
          userName: string;
          password:string;
          address: {
            state: string,
            city: string,
            postalCode:string,
          },
}
