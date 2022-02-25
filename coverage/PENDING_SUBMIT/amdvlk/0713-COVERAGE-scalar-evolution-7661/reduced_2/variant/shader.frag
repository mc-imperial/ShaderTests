#version 320 es

precision highp int;

precision highp float;

void main()
{
 float GLF_live7beta = 1.0;
 GLF_live7beta = 9.2;
 mat4 GLF_live7matrix_a = mat4(1.0);
 int GLF_live7_looplimiter4 = 1;
 for(int GLF_live7j = 1; GLF_live7j < 4; GLF_live7j ++)
  {
   if(gl_FragCoord.x < 1.0)
    {
     break;
    }
   if(GLF_live7_looplimiter4 >= 5)
    {
     break;
    }
   GLF_live7_looplimiter4 ++;
   int GLF_live7_looplimiter3 = 1;
   for(int GLF_live7a = 1; true; 1)
    {
     if(GLF_live7_looplimiter3 >= 5)
      {
       break;
      }
     GLF_live7_looplimiter3 ++;
     GLF_live7matrix_a[clamp(GLF_live7a, 0, 4 - 1)][clamp(GLF_live7j, 0, 4 - 1)] = GLF_live7matrix_a[1][1] - GLF_live7beta;
    }
   GLF_live7beta = 1.0;
  }
}
