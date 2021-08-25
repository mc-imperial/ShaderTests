#version 320 es

#ifndef REDUCER
#define _GLF_ZERO(X, Y)                   (Y)
#define _GLF_ONE(X, Y)                    (Y)
#define _GLF_FALSE(X, Y)                  (Y)
#define _GLF_TRUE(X, Y)                   (Y)
#define _GLF_IDENTITY(X, Y)               (Y)
#define _GLF_DEAD(X)                      (X)
#define _GLF_FUZZED(X)                    (X)
#define _GLF_WRAPPED_LOOP(X)              X
#define _GLF_WRAPPED_IF_TRUE(X)           X
#define _GLF_WRAPPED_IF_FALSE(X)          X
#define _GLF_SWITCH(X)                    X
#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _GLF_MAKE_IN_BOUNDS_UINT(IDX, SZ) clamp(IDX, 0u, SZ - 1u)
#endif

// END OF GENERATED HEADER

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 for(int rows = 1; rows <= 4; rows ++)
  {
   int GLF_live0i = 1;
   GLF_live0i = - 13247;
   int GLF_live0_looplimiter5 = 1;
   do
    {
     if(GLF_live0_looplimiter5 >= 7)
      {
       break;
      }
     GLF_live0_looplimiter5 ++;
     switch(GLF_live0i)
      {
       case 0:
       _GLF_color = vec4(1.0);
       break;
       case 5:
       if(gl_FragCoord.x < 1.0)
        {
         _GLF_color = vec4(1.0, vec2(1.0), 3643.3571);
        }
      }
     GLF_live0i ++;
    }
   while(GLF_live0i < 10);
   int GLF_live7_looplimiter7 = 1;
   float GLF_live7sums[9] = float[9](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
   int GLF_live7sum_index = 1;
   for(int GLF_live7cols = 1; true; 1)
    {
     if(GLF_live7_looplimiter7 >= 4)
      {
       break;
      }
     GLF_live7_looplimiter7 ++;
     for(int GLF_live7rows = 1; GLF_live7rows <= 4; GLF_live7rows ++)
      {
       for(int GLF_live7r = 1; GLF_live7r < GLF_live7rows; GLF_live7r ++)
        {
         GLF_live7sums[_GLF_MAKE_IN_BOUNDS_INT(clamp(GLF_live7sum_index, 0, 9 - 1), 9)] += 1.0;
        }
       GLF_live7sum_index ++;
      }
    }
  }
}
