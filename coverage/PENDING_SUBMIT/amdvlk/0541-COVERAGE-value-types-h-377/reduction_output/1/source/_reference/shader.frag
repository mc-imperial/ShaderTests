#version 320 es
precision highp float;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform buf0 {
 vec2 injectionSwitch;
};
layout(set = 0, binding = 1) uniform buf1 {
 vec2 resolution;
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
 mat3 pos = mat3(vec3(4, 0, int(injectionSwitch.y)) * ldexp(0.5, 2), vec3(0, - 5, int(injectionSwitch.y)) * ldexp(0.2, 5), vec3(1, 8, int(injectionSwitch.y)) * ldexp(injectionSwitch.y, 0));
 vec3 vecCoor = roundEven(pos * vec3(gl_FragCoord.xx / resolution.yx, 1));
 vec2 color;
 do
  {
   if(int(gl_FragCoord[1]) < 30)
    {
     color = fract(sin(vecCoor.yx - trunc(float(data[0]))));
     color[0] = dFdy(gl_FragCoord.y);
     break;
    }
   else
    if(int(gl_FragCoord[1]) < 60)
     {
      color = fract(sin(vecCoor.yx - trunc(float(data[1]))));
      color[1] *= atan(faceforward(injectionSwitch, color.xx, vecCoor.yx).y);
      break;
     }
    else
     if(int(gl_FragCoord[1]) < 90)
      {
       color = fract(sin(vecCoor.yx - trunc(float(data[2]))));
       color.x += atanh(color.x) * cosh(injectionSwitch.y) * smoothstep(color, injectionSwitch, gl_FragCoord.yy).x;
       break;
      }
     else
      if(int(gl_FragCoord[1]) < 120)
       {
        color = fract(acosh(clamp(vecCoor.yx - trunc(float(data[3])), 1.0, 1000.0)));
        color.x += (isnan(gl_FragCoord.x) ? log2(gl_FragCoord.x) : log2(gl_FragCoord.y));
        break;
       }
      else
       if(int(gl_FragCoord[1]) < 150)
        {
         discard;
        }
       else
        if(int(gl_FragCoord[1]) < 180)
         {
          color = fract(sin(vecCoor.yx - trunc(float(data[4]))));
          color[1] += asinh(gl_FragCoord.y * ldexp(color.y, - i));
          break;
         }
        else
         if(int(gl_FragCoord[1]) < 210)
          {
           color = fract(sin(vecCoor.yx - trunc(float(data[5]))));
           color.y -= tanh(color.x) / cosh(color.y);
           break;
          }
         else
          if(int(gl_FragCoord[1]) < 240)
           {
            color = fract(asinh(vecCoor.yx - trunc(float(data[6]))));
            color.y -= isnan(float(i)) ? tanh(gl_FragCoord.x) : atanh(gl_FragCoord.y);
            break;
           }
          else
           if(int(gl_FragCoord[1]) < 270)
            {
             color = fract(sin(vecCoor.yx - trunc(float(data[7]))));
             color.y *= mix(normalize(vecCoor), normalize(vec3(color, degrees(color.x))), injectionSwitch.x).y;
             break;
            }
           else
            {
             discard;
            }
  }
 while(0 == int(injectionSwitch.x));
 _GLF_color = vec4(vec3(color, trunc(injectionSwitch.y)), injectionSwitch.y);
}
