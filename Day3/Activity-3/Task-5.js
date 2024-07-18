//wap that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to console
function grade(gradeScore){
    switch (gradeScore){
      case 100: 
        console.log('Grade A')
        break
      case 90:
        console.log('Grade B')
        break
      case 80: 
        console.log('Grade C')
        break
      case 70:
        console.log('Grade D')
        break
      case 60:
        console.log('Grade E')
        break
      default:
        console.log('Please Enter value b/w 50 to 100')
    }
  }
  let gradeScore = 60;
  grade(gradeScore)