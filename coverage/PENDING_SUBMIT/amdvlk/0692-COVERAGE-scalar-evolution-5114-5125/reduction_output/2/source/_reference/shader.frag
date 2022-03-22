#version 320 es
precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
const int N = 10;

int data[10], temp[10];

void merge(int from, int mid, int to)
{
 int k = from, i = from, j = mid + 1;
 while(i <= mid && j <= to)
  {
   if(data[i] < data[j])
    {
     temp[k ++] = data[i ++];
    }
   else
    {
     temp[k ++] = data[j ++];
    }
  }
 while(i < N && i <= mid)
  {
   temp[k ++] = data[i ++];
  }
 for(int i = from; i <= to; i ++)
  {
   data[i] = temp[i];
  }
}
void mergeSort()
{
 int low = 0;
 int high = N - 1;
 for(int m = 1; m <= high; m = 2 * m)
  {
   for(int i = low; i < high; i += 2 * m)
    {
     int from = i;
     int mid = i + m - 1;
     int to = min(i + 2 * m - 1, high);
     merge(from, mid, to);
    }
  }
}
void main()
{
 int i = int(injectionSwitch.x);
 do
  {
   switch(i)
    {
     case 0:
     data[i] = 4;
     break;
     case 1:
     data[i] = 3;
     break;
     case 2:
     data[i] = 2;
     break;
     case 3:
     data[i] = 1;
     break;
     case 4:
     data[i] = 0;
     break;
     case 5:
     data[i] = - 1;
     break;
     case 6:
     data[i] = - 2;
     break;
     case 7:
     data[i] = - 3;
     break;
     case 8:
     data[i] = - 4;
     break;
     case 9:
     data[i] = - 5;
     break;
    }
   i ++;
  }
 while(i < 10);
 for(int j = 0; j < 10; j ++)
  {
   temp[j] = data[j];
  }
 mergeSort();
 float grey;
 if(int(gl_FragCoord[1]) < 30)
  {
   grey = 0.5 + float(data[0]) / 10.0;
  }
 else
  {
   if(int(gl_FragCoord[1]) < 60)
    {
     grey = 0.5 + float(data[1]) / 10.0;
    }
   else
    {
     if(int(gl_FragCoord[1]) < 90)
      {
       grey = 0.5 + float(data[2]) / 10.0;
      }
     else
      {
       if(int(gl_FragCoord[1]) < 120)
        {
         grey = 0.5 + float(data[3]) / 10.0;
        }
       else
        {
         if(int(gl_FragCoord[1]) < 150)
          {
           discard;
          }
         else
          {
           if(int(gl_FragCoord[1]) < 180)
            {
             grey = 0.5 + float(data[5]) / 10.0;
            }
           else
            {
             if(int(gl_FragCoord[1]) < 210)
              {
               grey = 0.5 + float(data[6]) / 10.0;
              }
             else
              {
               if(int(gl_FragCoord[1]) < 240)
                {
                 grey = 0.5 + float(data[7]) / 10.0;
                }
               else
                {
                 if(int(gl_FragCoord[1]) < 270)
                  {
                   grey = 0.5 + float(data[8]) / 10.0;
                  }
                 else
                  {
                   discard;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
 _GLF_color = vec4(vec3(grey), 1.0);
}
