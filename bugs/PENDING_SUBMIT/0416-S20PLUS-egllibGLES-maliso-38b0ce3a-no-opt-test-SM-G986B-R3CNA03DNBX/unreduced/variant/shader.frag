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
precision highp float;

layout(set = 0, binding = 0) uniform sampler2D tex;

layout(set = 0, binding = 1) uniform buf1 {
 highp vec2 injectionSwitch;
};
mediump vec4 GLF_live20gl_FragCoord = _GLF_FUZZED(vec4(-338.903, 346.117, -3.1, -1.1));

vec4 GLF_live20_GLF_color = _GLF_FUZZED(vec4(-5289.4679, 9.4, 74.90, -750.620));

layout(set = 0, binding = 2) uniform buf2 {
 vec2 GLF_live20injectionSwitch;
};
layout(set = 0, binding = 3) uniform buf3 {
 vec2 GLF_live20resolution;
};
struct GLF_live20BinarySearchObject {
 int prime_numbers[10];
} ;

vec2 GLF_live20brick(vec2 GLF_live20uv)
{
 int GLF_live20a = 4;
 {
  int GLF_live20_looplimiter0 = 0;
  do
   {
    if(GLF_live20_looplimiter0 >= 7)
     {
      break;
     }
    GLF_live20_looplimiter0 ++;
    GLF_live20uv.y -= step(GLF_live20injectionSwitch.y, GLF_live20uv.x);
    GLF_live20uv.x -= fract(tanh(GLF_live20uv.x)) / ldexp(GLF_live20injectionSwitch.y, findMSB(GLF_live20a));
    GLF_live20a --;
   }
  while(GLF_live20a > int(GLF_live20injectionSwitch.x));
 }
 int GLF_live20b = 3;
 {
  int GLF_live20_looplimiter1 = 0;
  do
   {
    if(GLF_live20_looplimiter1 >= 7)
     {
      break;
     }
    GLF_live20_looplimiter1 ++;
    GLF_live20uv.y -= step(GLF_live20injectionSwitch.y, GLF_live20uv.x) + float(GLF_live20a);
    GLF_live20uv.x *= (isnan(GLF_live20uv.y) ? cosh(GLF_live20gl_FragCoord.y) : tanh(GLF_live20gl_FragCoord.x));
    GLF_live20b --;
   }
  while(GLF_live20b > int(GLF_live20injectionSwitch.x));
 }
 int GLF_live20c = 2;
 {
  int GLF_live20_looplimiter2 = 0;
  do
   {
    if(GLF_live20_looplimiter2 >= 7)
     {
      break;
     }
    GLF_live20_looplimiter2 ++;
    GLF_live20uv.y -= step(GLF_live20injectionSwitch.y, GLF_live20uv.x) + float(GLF_live20a) + float(GLF_live20b);
    GLF_live20uv.x += ldexp(GLF_live20injectionSwitch.y, isinf(GLF_live20uv.y + GLF_live20uv.x) ? findMSB(GLF_live20b) : findMSB(GLF_live20a));
    GLF_live20c --;
   }
  while(GLF_live20c > int(GLF_live20injectionSwitch.x));
 }
 int GLF_live20d = 1;
 {
  int GLF_live20_looplimiter3 = 0;
  do
   {
    if(GLF_live20_looplimiter3 >= 7)
     {
      break;
     }
    GLF_live20_looplimiter3 ++;
    GLF_live20uv.y -= step(GLF_live20injectionSwitch.y, GLF_live20uv.x) + float(GLF_live20a) + float(GLF_live20b) + float(GLF_live20c);
    GLF_live20d --;
   }
  while(GLF_live20d > int(GLF_live20injectionSwitch.x));
 }
 return fract(GLF_live20uv);
}
float GLF_live20patternize(vec2 GLF_live20uv)
{
 vec2 GLF_live20size = vec2(0.45);
 vec2 GLF_live20st = smoothstep(GLF_live20size, GLF_live20size, GLF_live20uv);
 switch(int(mod(GLF_live20gl_FragCoord.y, 5.0)))
  {
   case 0:
   return mix(pow(GLF_live20st.x, GLF_live20injectionSwitch.y), GLF_live20st.x, GLF_live20size.y);
   break;
   case 1:
   return mix(pow(GLF_live20uv.y, GLF_live20injectionSwitch.y), GLF_live20st.y, GLF_live20size.x);
   break;
   case 2:
   discard;
   break;
   case 3:
   return mix(pow(GLF_live20uv.y, GLF_live20injectionSwitch.y), GLF_live20uv.y, GLF_live20size.y);
   break;
   case 4:
   return mix(pow(GLF_live20st.y, GLF_live20injectionSwitch.y), GLF_live20st.x, GLF_live20size.x);
   break;
  }
}
int GLF_live20binarySearch(GLF_live20BinarySearchObject GLF_live20obj, int GLF_live20x)
{
 int GLF_live20l = 0, GLF_live20r = 9;
 {
  int GLF_live20_looplimiter4 = 0;
  while(GLF_live20l <= GLF_live20r)
   {
    if(GLF_live20_looplimiter4 >= 7)
     {
      break;
     }
    GLF_live20_looplimiter4 ++;
    int GLF_live20m = (GLF_live20l + GLF_live20r) / 2;
    if(GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20m, 10)] == GLF_live20x)
     {
      return GLF_live20m;
     }
    if(GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20m, 10)] < GLF_live20x)
     {
      GLF_live20l = GLF_live20m + 1;
     }
    else
     {
      GLF_live20r = GLF_live20m - 1;
     }
   }
 }
 return - 1;
}
precision highp float;

mediump vec4 GLF_live19gl_FragCoord = _GLF_FUZZED((vec4(4.7, -3.1, 1741.9253, 8411.7563)));

vec2 GLF_live19injectionSwitch = vec2(0.35052454, 0.8905346);

const int GLF_live19N = 10;

int GLF_live19data[10] = _GLF_FUZZED(int[10](GLF_live19N, ivec3(-88220, -31985, -81677).z, int(172904u), GLF_live19N, 14138, 43939, -87491, GLF_live19N, -34538, (67220 >> -74318))), GLF_live19temp[10] = _GLF_FUZZED(int[10](-55955, (GLF_live19N ^ GLF_live19N), ivec2(-61453, -72467).st.x, GLF_live19N, (55774 * GLF_live19N), GLF_live19N, (GLF_live19N ^ GLF_live19N), -37694, GLF_live19N, (GLF_live19N ^ 77857)));

void GLF_live19merge(int GLF_live19from, int GLF_live19mid, int GLF_live19to)
{
 int GLF_live19k = GLF_live19from, GLF_live19i = GLF_live19from, GLF_live19j = GLF_live19mid + 1;
 {
  int GLF_live19_looplimiter0 = 0;
  while(GLF_live19i <= GLF_live19mid && GLF_live19j <= GLF_live19to)
   {
    if(GLF_live19_looplimiter0 >= 5)
     {
      break;
     }
    GLF_live19_looplimiter0 ++;
    if(GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] < GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19j, 10)])
     {
      GLF_live19temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19k ++, 10)] = GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i ++, 10)];
     }
    else
     {
      GLF_live19temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19k ++, 10)] = GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19j ++, 10)];
     }
   }
 }
 {
  int GLF_live19_looplimiter1 = 0;
  while(GLF_live19i < GLF_live19N && GLF_live19i <= GLF_live19mid)
   {
    if(GLF_live19_looplimiter1 >= 5)
     {
      break;
     }
    GLF_live19_looplimiter1 ++;
    GLF_live19temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19k ++, 10)] = GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i ++, 10)];
   }
 }
 {
  int GLF_live19_looplimiter2 = 0;
  for(int GLF_live19i = GLF_live19from; GLF_live19i <= GLF_live19to; GLF_live19i ++)
   {
    if(GLF_live19_looplimiter2 >= 5)
     {
      break;
     }
    GLF_live19_looplimiter2 ++;
    GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = GLF_live19temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)];
   }
 }
}
precision highp float;

precision highp int;

mediump vec4 GLF_live18gl_FragCoord = _GLF_FUZZED((mat4(-619.422, -1.9, -47.80, -769.966, 65.73, 262.834, 1.5, 9.0, 4252.3746, 13.73, -76.56, -86.70, 0.6, 81.97, 720.087, 7.4) * vec4(-13.52, -2678.5010, 24.64, 14.51)));

vec4 GLF_live18_GLF_color = _GLF_FUZZED(vec4(756.412, 2.9, 1.4, 9226.6594));

vec2 GLF_live18resolution = vec2(0.9888063, 0.3113166);

precision highp float;

precision highp int;

mediump vec4 GLF_live21gl_FragCoord = _GLF_FUZZED(vec4(943.490, -37.63, -0.9, -54.41));

vec4 GLF_live21_GLF_color = _GLF_FUZZED(vec4(9.4, -17.69, -37.69, 284.629));

layout(set = 0, binding = 4) uniform buf4 {
 vec2 GLF_live21resolution;
};
const vec4 GLF_live21pal[16] = vec4[16](vec4(0.0, 0.0, 0.0, 1.0), vec4(0.5, 0.0, 0.0, 1.0), vec4(0.0, 0.5, 0.0, 1.0), vec4(0.5, 0.5, 0.0, 1.0), vec4(0.0, 0.0, 0.5, 1.0), vec4(0.5, 0.0, 0.5, 1.0), vec4(0.0, 0.5, 0.5, 1.0), vec4(0.5, 0.5, 0.5, 1.0), vec4(0.0, 0.0, 0.0, 1.0), vec4(1.0, 0.0, 0.0, 1.0), vec4(0.0, 1.0, 0.0, 1.0), vec4(1.0, 1.0, 0.0, 1.0), vec4(0.0, 0.0, 1.0, 1.0), vec4(1.0, 0.0, 1.0, 1.0), vec4(0.0, 1.0, 1.0, 1.0), vec4(1.0, 1.0, 1.0, 1.0));

precision highp float;

mediump vec4 GLF_live16gl_FragCoord = _GLF_FUZZED(vec4(-3.9, -7.3, 2.3, 2771.1547));

vec4 GLF_live16_GLF_color = _GLF_FUZZED(vec4(-4186.4174, -82.42, vec2(-550.753, -30.99)));

vec2 GLF_live16injectionSwitch = vec2(0.9375092, 0.35359657);

vec2 GLF_live16resolution = vec2(0.71347743, 0.7042136);

struct GLF_live16QuicksortObject {
 int numbers[10];
} ;

GLF_live16QuicksortObject GLF_live16obj = _GLF_FUZZED(GLF_live16QuicksortObject(int[10](29629, -89975, (50332 / -36371), -36578, 52014, 7403, -2461, -24948, 53930, (+ 22249))));

void GLF_live16swap(int GLF_live16i, int GLF_live16j)
{
 int GLF_live16temp = GLF_live16obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live16i, 10)];
 GLF_live16obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live16i, 10)] = GLF_live16obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live16j, 10)];
 GLF_live16obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live16j, 10)] = GLF_live16temp;
}
int GLF_live16performPartition(int GLF_live16l, int GLF_live16h)
{
 int GLF_live16pivot = GLF_live16obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live16h, 10)];
 int GLF_live16i = (GLF_live16l - 1);
 {
  int GLF_live16_looplimiter0 = 0;
  for(int GLF_live16j = GLF_live16l; GLF_live16j <= GLF_live16h - 1; GLF_live16j ++)
   {
    if(GLF_live16_looplimiter0 >= 3)
     {
      break;
     }
    GLF_live16_looplimiter0 ++;
    if(GLF_live16obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live16j, 10)] <= GLF_live16pivot)
     {
      GLF_live16i ++;
      GLF_live16swap(GLF_live16i, GLF_live16j);
     }
   }
 }
 {
  float GLF_live18A[50] = _GLF_FUZZED(float[50](361.530, -8.5, (- -76.96), 902.846, 6077.5831, float(194203u), 73.77, float(false), float(true), -6.1, -310.014, 5022.9486, (- -83.66), 17.96, 4004.0831, 94.72, (-212.480 / 875.068), 775.878, 902.846, 94.72, 6077.5831, -310.014, 775.878, 17.96, float(true), (- -83.66), float(false), (- -76.96), -8.5, 5022.9486, -6.1, float(194203u), 73.77, (-212.480 / 875.068), 361.530, 4004.0831, -6.1, 94.72, -8.5, float(true), (- -76.96), 902.846, (-212.480 / 875.068), 361.530, 73.77, float(194203u), float(false), 6077.5831, 4004.0831, 17.96));
  {
   GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(40, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(44, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
  }
 }
 GLF_live16swap(GLF_live16i + 1, GLF_live16h);
 {
  int GLF_live19j = _GLF_FUZZED((+ 65921));
  int GLF_live19k = _GLF_FUZZED(72460);
  int GLF_live19mid = _GLF_FUZZED(-38941);
  int GLF_live19i = _GLF_FUZZED((+ -88078));
  int GLF_live19to = _GLF_FUZZED((-83296 ^ -76566));
  {
   int GLF_live19_looplimiter0 = 0;
   while(GLF_live19i <= GLF_live19mid && GLF_live19j <= GLF_live19to)
    {
     if(GLF_live19_looplimiter0 >= 5)
      {
       break;
      }
     GLF_live19_looplimiter0 ++;
     if(GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] < GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19j, 10)])
      {
       GLF_live19temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19k ++, 10)] = GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i ++, 10)];
      }
     else
      {
       GLF_live19temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19k ++, 10)] = GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19j ++, 10)];
      }
    }
  }
 }
 return (GLF_live16i + 1);
}
void GLF_live16quicksort()
{
 {
  GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](-34920, -50215, 46354, -86777, 96854, -62785, -4014, 37968, (+ -46804), int(-53.70))));
  int GLF_live20m = _GLF_FUZZED((72445));
  int GLF_live20x = _GLF_FUZZED(-89879);
  if(GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20m, 10)] == GLF_live20x)
   {
    GLF_live20m;
   }
 }
 int GLF_live16l = 0, GLF_live16h = 9;
 int GLF_live16stack[10] = _GLF_FUZZED(int[10](GLF_live16h, GLF_live16l, GLF_live16l, GLF_live16l, (uvec2(30018u, 90898u) , GLF_live16h), ivec2(-30762, -90982)[0], GLF_live16l, GLF_live16h, GLF_live16l, (GLF_live16h --)));
 int GLF_live16top = - 1;
 GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16l;
 GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16h;
 {
  int GLF_live16_looplimiter1 = 0;
  while(GLF_live16top >= 0)
   {
    if(GLF_live16_looplimiter1 >= 3)
     {
      break;
     }
    GLF_live16_looplimiter1 ++;
    GLF_live16h = GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(GLF_live16top --, 10)];
    GLF_live16l = GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(GLF_live16top --, 10)];
    int GLF_live16p = GLF_live16performPartition(GLF_live16l, GLF_live16h);
    if(GLF_live16p - 1 > GLF_live16l)
     {
      GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16l;
      GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16p - 1;
     }
    if(GLF_live16p + 1 < GLF_live16h)
     {
      GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16p + 1;
      GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16h;
     }
   }
 }
 {
  int GLF_live18msb9 = _GLF_FUZZED(33832);
  float GLF_live18A[50] = _GLF_FUZZED(float[50](vec2(-240.373, -20.42).t, 1.6, 3828.7232, 655.387, 9.6, float(22739), 324.937, 748.395, -1.4, (1.3 + 506.912), 80.44, -679.770, -9.0, 7.9, 5.0, 4934.8366, -5.6, -5265.8423, -9.0, 9.6, -5265.8423, -1.4, vec2(-240.373, -20.42).t, 655.387, -679.770, 324.937, 3828.7232, 7.9, 5.0, 4934.8366, 1.6, (1.3 + 506.912), 748.395, 80.44, float(22739), -5.6, 9.6, 4934.8366, -679.770, 3828.7232, 7.9, (1.3 + 506.912), 655.387, 80.44, 324.937, -5265.8423, vec2(-240.373, -20.42).t, -1.4, 1.6, float(22739)));
  {
   GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(32), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb9), 50)] / GLF_live18resolution.y, 1.0, 1.0);
  }
 }
}
vec3 GLF_live16palette(vec3 GLF_live16a, vec3 GLF_live16b, vec3 GLF_live16c, vec3 GLF_live16d)
{
 {
  int GLF_live21iters = _GLF_FUZZED(54404);
  int GLF_live21_looplimiter0 = 0;
  int GLF_live21v = _GLF_FUZZED((-30897 + (88642 | 42567)));
  int GLF_live21i = _GLF_FUZZED(-33766);
  for(  GLF_live21i = 0;
 GLF_live21i < GLF_live21iters; GLF_live21i ++)
   {
    if(GLF_live21_looplimiter0 >= 6)
     {
      break;
     }
    GLF_live21_looplimiter0 ++;
    GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
   }
 }
 return fract(mix(GLF_live16d * GLF_live16a, GLF_live16a * GLF_live16c, GLF_live16b + GLF_live16d - GLF_live16c));
}
float GLF_live16randomize(vec2 GLF_live16co)
{
 return float(floor(fract(sin(dot(GLF_live16co.xy, vec2(12.5, 3.))) * 4250. + 0.02) + 0.5));
}
bool GLF_live16puzzlelize(vec2 GLF_live16pos)
{
 return GLF_live16randomize(GLF_live16pos.xy) < .12;
}
precision highp float;

mediump vec4 GLF_live14gl_FragCoord = _GLF_FUZZED(vec4(662.753, -8018.6215, 2.7, -860.893));

mediump vec2 GLF_live14gl_PointCoord = _GLF_FUZZED((89.57 - vec2(613.643, -9.7)));

float GLF_live14time = 0.17058921;

vec2 GLF_live14resolution = vec2(0.48823267, 0.22406095);

float GLF_live14h_r = _GLF_FUZZED(891.750);

float GLF_live14s_g = _GLF_FUZZED(float(35581));

float GLF_live14b_b = _GLF_FUZZED(-9.0);

void GLF_live14doConvert()
{
 {
  vec3 GLF_live19vecCoor = _GLF_FUZZED(vec3(3.2, 2.4, -4661.7870));
  vec2 GLF_live19color = _GLF_FUZZED((vec2(7.3, 3.6) * mat2(1.2, 648.642, -5.2, 7.8)));
  int GLF_live19i = _GLF_FUZZED(int((vec4(-677.032, -58.11, -2.4, -5285.6138) != vec4(-9051.6221, -524.123, -811.545, 227.418))));
  if(int(GLF_live19gl_FragCoord[1]) < 60)
   {
    GLF_live19color = fract(sin(GLF_live19vecCoor.yx - trunc(float(GLF_live19data[1]))));
    GLF_live19color[1] *= atan(faceforward(GLF_live19injectionSwitch, GLF_live19color.xx, GLF_live19vecCoor.yx).y);
    1;
   }
  else
   if(int(GLF_live19gl_FragCoord[1]) < 90)
    {
     GLF_live19color = fract(sin(GLF_live19vecCoor.yx - trunc(float(GLF_live19data[2]))));
     GLF_live19color.x += atanh(GLF_live19color.x) * cosh(GLF_live19injectionSwitch.y) * smoothstep(GLF_live19color, GLF_live19injectionSwitch, GLF_live19gl_FragCoord.yy).x;
     1;
    }
   else
    if(int(GLF_live19gl_FragCoord[1]) < 120)
     {
      GLF_live19color = fract(acosh(clamp(GLF_live19vecCoor.yx - trunc(float(GLF_live19data[3])), 1.0, 1000.0)));
      GLF_live19color.x += (isnan(GLF_live19gl_FragCoord.x) ? log2(GLF_live19gl_FragCoord.x) : log2(GLF_live19gl_FragCoord.y));
      1;
     }
    else
     if(int(GLF_live19gl_FragCoord[1]) < 150)
      {
       1;
      }
     else
      if(int(GLF_live19gl_FragCoord[1]) < 180)
       {
        GLF_live19color = fract(sin(GLF_live19vecCoor.yx - trunc(float(GLF_live19data[4]))));
        GLF_live19color[1] += asinh(GLF_live19gl_FragCoord.y * ldexp(GLF_live19color.y, - GLF_live19i));
        1;
       }
      else
       if(int(GLF_live19gl_FragCoord[1]) < 210)
        {
         GLF_live19color = fract(sin(GLF_live19vecCoor.yx - trunc(float(GLF_live19data[5]))));
         GLF_live19color.y -= tanh(GLF_live19color.x) / cosh(GLF_live19color.y);
         1;
        }
       else
        if(int(GLF_live19gl_FragCoord[1]) < 240)
         {
          GLF_live19color = fract(asinh(GLF_live19vecCoor.yx - trunc(float(GLF_live19data[6]))));
          GLF_live19color.y -= isnan(float(GLF_live19i)) ? tanh(GLF_live19gl_FragCoord.x) : atanh(GLF_live19gl_FragCoord.y);
          1;
         }
        else
         if(int(GLF_live19gl_FragCoord[1]) < 270)
          {
           GLF_live19color = fract(sin(GLF_live19vecCoor.yx - trunc(float(GLF_live19data[7]))));
           GLF_live19color.y *= mix(normalize(GLF_live19vecCoor), normalize(vec3(GLF_live19color, degrees(GLF_live19color.x))), GLF_live19injectionSwitch.x).y;
           1;
          }
         else
          {
           1;
          }
 }
 vec3 GLF_live14temp = _GLF_FUZZED(vec3(-654.899, 2.9, 63.30));
 GLF_live14temp = GLF_live14b_b * (1.0 - GLF_live14s_g) + (GLF_live14b_b - GLF_live14b_b * (1.0 - GLF_live14s_g)) * clamp(abs(abs(6.0 * (GLF_live14h_r - vec3(0, 1, 2) / 3.0)) - 3.0) - 1.0, 0.0, 1.0);
 GLF_live14h_r = GLF_live14temp.x;
 GLF_live14s_g = GLF_live14temp.y;
 GLF_live14b_b = GLF_live14temp.z;
}
vec3 GLF_live14computeColor(float GLF_live14c, vec2 GLF_live14position)
{
 GLF_live14h_r = fract(GLF_live14c);
 GLF_live14s_g = 1.0;
 GLF_live14b_b = (0.5 + (sin(GLF_live14time) * 0.5 + 0.5));
 GLF_live14doConvert();
 GLF_live14s_g *= 1.0 / GLF_live14position.y;
 GLF_live14h_r *= 1.0 / GLF_live14position.x;
 if(abs(GLF_live14position.y - GLF_live14position.x) < 0.5)
  {
   GLF_live14b_b = clamp(0.0, 1.0, GLF_live14b_b * 3.0);
  }
 return vec3(GLF_live14h_r, GLF_live14s_g, GLF_live14b_b);
}
vec3 GLF_live14defaultColor()
{
 return vec3(0.0);
}
vec3 GLF_live14drawShape(vec2 GLF_live14pos, vec2 GLF_live14square, vec3 GLF_live14setting)
{
 bool GLF_live14c1 = GLF_live14pos.x - GLF_live14setting.x < GLF_live14square.x;
 if(! GLF_live14c1)
  {
   return GLF_live14defaultColor();
  }
 bool GLF_live14c2 = GLF_live14pos.x + GLF_live14setting.x > GLF_live14square.x;
 if(! GLF_live14c2)
  {
   return GLF_live14defaultColor();
   {
    GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](-82341, -39113, -46817, 41317, 74055, -26335, 35509, -91795, 45229, -82341)));
    int GLF_live20i = _GLF_FUZZED(-33370);
    {
     GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 29;
    }
   }
  }
 bool GLF_live14c3 = GLF_live14pos.y - GLF_live14setting.x < GLF_live14square.y;
 if(! GLF_live14c3)
  {
   return GLF_live14defaultColor();
  }
 {
  {
   1;
  }
 }
 bool GLF_live14c4 = GLF_live14pos.y + GLF_live14setting.x > GLF_live14square.y;
 if(! GLF_live14c4)
  {
   return GLF_live14defaultColor();
  }
 bool GLF_live14c5 = GLF_live14pos.x - (GLF_live14setting.x - GLF_live14setting.y) < GLF_live14square.x;
 if(! GLF_live14c5)
  {
   return GLF_live14computeColor(GLF_live14setting.z / 40.0, GLF_live14pos);
  }
 bool GLF_live14c6 = GLF_live14pos.x + (GLF_live14setting.x - GLF_live14setting.y) > GLF_live14square.x;
 if(! GLF_live14c6)
  {
   return GLF_live14computeColor(GLF_live14setting.z / 40.0, GLF_live14pos);
  }
 bool GLF_live14c7 = GLF_live14pos.y - (GLF_live14setting.x - GLF_live14setting.y) < GLF_live14square.y;
 if(! GLF_live14c7)
  {
   return GLF_live14computeColor(GLF_live14setting.z / 40.0, GLF_live14pos);
  }
 bool GLF_live14c8 = GLF_live14pos.y + (GLF_live14setting.x - GLF_live14setting.y) > GLF_live14square.y;
 if(! GLF_live14c8)
  {
   return GLF_live14computeColor(GLF_live14setting.z / 40.0, GLF_live14pos);
  }
 return GLF_live14defaultColor();
}
precision highp float;

precision highp int;

precision highp float;

mediump vec4 GLF_live17gl_FragCoord = _GLF_FUZZED(vec4((vec2(-6857.8765, 109.760) * vec2(-3.5, -4.0)), vec2(502.056, -8.5)));

vec4 GLF_live17_GLF_color = _GLF_FUZZED(vec4(-2903.8404, 473.027, -63.37, -5.7));

float GLF_live17ReallyApproxNormalizedAtan2(vec2 GLF_live17v)
{
 float GLF_live17pi2 = 1.0 / (355.0 / 113.0);
 if(length(GLF_live17v) < 0.001)
  {
   return 0.0;
   {
    float GLF_live18A[50] = _GLF_FUZZED(float[50](476.107, -230.282, -4.0, -2666.5589, 2.7, 14.35, (86.14 * 623.075), -4.7, 3975.3451, 14.88, -2.6, 7.8, -8.9, 4331.0662, (-71.10 - -4.6), 65.15, 3969.2552, 3841.4853, 680.860, 3841.4853, 3975.3451, -4.7, (-71.10 - -4.6), -2666.5589, 14.35, 4331.0662, -8.9, 2.7, -230.282, 7.8, 14.88, 476.107, -2.6, (86.14 * 623.075), 3969.2552, -4.0, 65.15, 680.860, -4.0, 14.35, 3969.2552, -2.6, 476.107, (86.14 * 623.075), 7.8, -8.9, 14.88, (-71.10 - -4.6), 2.7, 680.860));
    if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(160, 0, 0, 0))
     {
      GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(35, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(39, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
     }
    else
     if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(180, 0, 0, 0))
      {
       GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(40, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(44, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
      }
     else
      if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(180, 0, 0, 0))
       {
        GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(45, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(49, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
       }
      else
       {
        1;
       }
   }
  }
 vec2 GLF_live17a = abs(GLF_live17v);
 float GLF_live17z = _GLF_FUZZED(-1058.5550);
 if(GLF_live17a.y > GLF_live17a.x)
  {
   GLF_live17z = GLF_live17a.x / GLF_live17a.y;
   {
    vec3 GLF_live19vecCoor = _GLF_FUZZED(vec3((62.56 + 51.17), (vec2(0.3, -2.0) * mat2(0.3, -759.242, 813.863, -40.45))));
    vec2 GLF_live19color = _GLF_FUZZED(vec2(4497.7021, 88.70));
    {
     GLF_live19color = fract(sin(GLF_live19vecCoor.yx - trunc(float(GLF_live19data[0]))));
     GLF_live19color[0] = dFdy(GLF_live19gl_FragCoord.y);
     1;
    }
   }
  }
 else
  {
   GLF_live17z = GLF_live17a.y / GLF_live17a.x;
  }
 float GLF_live17th = (0.97 - 0.19 * GLF_live17z * GLF_live17z) * GLF_live17z * GLF_live17pi2;
 if(GLF_live17a.y < GLF_live17a.x)
  {
   GLF_live17th = 0.5 - GLF_live17th;
  }
 if(GLF_live17v.x < 0.0)
  {
   GLF_live17th = 1.0 - GLF_live17th;
  }
 if(GLF_live17v.y < 0.0)
  {
   GLF_live17th = - GLF_live17th;
  }
 return GLF_live17th;
 {
  float GLF_live18A[50] = _GLF_FUZZED(float[50](-532.511, 8023.9296, 5.0, 0.0, float(68375u), -327.093, -77.39, (- vec3(-6.5, 7.3, 1605.0837).p), -90.77, (vec2(-342.494, -5490.4341) - vec2(-4504.2638, 0.6)).r, 34.82, -24.29, 42.30, -13.40, 5.0, 8.5, 8.7, float(55562), 5442.8577, -133.270, -13.40, (vec2(-342.494, -5490.4341) - vec2(-4504.2638, 0.6)).r, 42.30, -327.093, float(55562), 5.0, 5442.8577, 8023.9296, -532.511, 0.0, -90.77, 8.5, float(68375u), -24.29, 34.82, -77.39, 5.0, (- vec3(-6.5, 7.3, 1605.0837).p), 8.7, -133.270, 5.0, -13.40, (- vec3(-6.5, 7.3, 1605.0837).p), 8.5, -77.39, 5.0, 8.7, (vec2(-342.494, -5490.4341) - vec2(-4504.2638, 0.6)).r, float(68375u), 42.30));
  {
   GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldReverse(0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(16), 50)] / GLF_live18resolution.y, 1.0, 1.0);
  }
 }
}
vec2 GLF_live17polarize(vec2 GLF_live17coord)
{
 float GLF_live17pi = (355.0 / 113.0);
 vec2 GLF_live17center = GLF_live17coord - vec2(0.5);
 float GLF_live17dist = length(GLF_live17center);
 float GLF_live17angle = GLF_live17ReallyApproxNormalizedAtan2(GLF_live17center);
 return vec2(GLF_live17dist, GLF_live17angle);
}
precision highp float;

precision highp int;

mediump vec4 GLF_live11gl_FragCoord = _GLF_FUZZED((vec4(-5147.9330, 7223.5770, 648.845, 5016.9922) * mat4(-6.6, -7636.5283, -13.57, 914.654, -6.8, 4750.3200, 7910.3463, 93.64, -68.10, 4.0, -88.14, -1.0, 6.6, 6.2, 344.427, -9631.3455)));

vec2 GLF_live11injectionSwitch = vec2(0.23902124, 0.8629802);

vec2 GLF_live11resolution = vec2(0.23082483, 0.33833373);

bool GLF_live11checkSwap(float GLF_live11a, float GLF_live11b)
{
 return GLF_live11gl_FragCoord.y < GLF_live11resolution.y / 2.0 ? GLF_live11a > GLF_live11b : GLF_live11a < GLF_live11b;
}
precision highp float;

precision highp int;

struct GLF_live13BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

GLF_live13BST GLF_live13tree[10] = _GLF_FUZZED(GLF_live13BST[10](GLF_live13BST(-62805, (- 55545), (- -21103)), GLF_live13BST(37893, 63951, -66080), GLF_live13BST(-84710, -66683, -64525), GLF_live13BST(-61298, -34293, 61464), GLF_live13BST(-22806, 42182, 15782), GLF_live13BST(-604, 58428, 81958), GLF_live13BST(-92744, -95365, 34111), GLF_live13BST(20061, 22009, 35245), GLF_live13BST(-95419, -18601, 93037), GLF_live13BST(37893, 63951, -66080)));

precision highp float;

precision highp int;

const vec4 GLF_live12pal[16] = vec4[16](vec4(0.0, 0.0, 0.0, 1.0), vec4(0.5, 0.0, 0.0, 1.0), vec4(0.0, 0.5, 0.0, 1.0), vec4(0.5, 0.5, 0.0, 1.0), vec4(0.0, 0.0, 0.5, 1.0), vec4(0.5, 0.0, 0.5, 1.0), vec4(0.0, 0.5, 0.5, 1.0), vec4(0.5, 0.5, 0.5, 1.0), vec4(0.0, 0.0, 0.0, 1.0), vec4(1.0, 0.0, 0.0, 1.0), vec4(0.0, 1.0, 0.0, 1.0), vec4(1.0, 1.0, 0.0, 1.0), vec4(0.0, 0.0, 1.0, 1.0), vec4(1.0, 0.0, 1.0, 1.0), vec4(0.0, 1.0, 1.0, 1.0), vec4(1.0, 1.0, 1.0, 1.0));

const vec4 GLF_live12picdata[8] = vec4[8](vec4(4, 4, 20, 4), vec4(4, 4, 4, 20), vec4(4, 20, 20, 4), vec4(20, 4, 4, 8), vec4(8, 6, 4, 2), vec4(2, 12, 2, 4), vec4(16, 2, 4, 4), vec4(12, 22, 4, 4));

precision highp float;

mediump vec4 GLF_live10gl_FragCoord = _GLF_FUZZED(vec4(-5.1, 7647.3375, -4466.3177, -8553.6678));

vec4 GLF_live10_GLF_color = _GLF_FUZZED(vec4(494.883, 3.9, 5.3, -878.173));

precision highp float;

struct GLF_live6BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

GLF_live6BST GLF_live6tree[10] = _GLF_FUZZED(GLF_live6BST[10](GLF_live6BST(-88892, -85716, 51613), GLF_live6BST(-61514, 44400, -83339), GLF_live6BST(61114, 66246, -53810), GLF_live6BST(-29457, -95839, int(-145.245)), GLF_live6BST(-64620, 90536, 89880), GLF_live6BST(-15884, -19405, -29896), GLF_live6BST(21826, 58228, ivec2(74430, -16362).s), GLF_live6BST(1522, -32898, -73329), GLF_live6BST(49541, -92192, 11825), GLF_live6BST(72054, -39825, -24449)));

void GLF_live6makeTreeNode(inout GLF_live6BST GLF_live6tree, int GLF_live6data)
{
 GLF_live6tree.data = GLF_live6data;
 GLF_live6tree.leftIndex = - 1;
 GLF_live6tree.rightIndex = - 1;
}
int GLF_live6search(int GLF_live6target)
{
 GLF_live6BST GLF_live6currentNode = _GLF_FUZZED(GLF_live6BST(GLF_live6target, 37868, -5315));
 int GLF_live6index = 0;
 {
  int GLF_live6_looplimiter1 = 0;
  while(GLF_live6index != - 1)
   {
    if(GLF_live6_looplimiter1 >= 4)
     {
      break;
     }
    {
     float GLF_live10refh = _GLF_FUZZED(7513.3575);
     vec2 GLF_live10uvstep = _GLF_FUZZED(vec2(-7.1, 4.5));
     float GLF_live10slope = _GLF_FUZZED((+ -6843.9819));
     float GLF_live10h = _GLF_FUZZED(9.4);
     int GLF_live10i = _GLF_FUZZED(int(61973u));
     vec2 GLF_live10coord = _GLF_FUZZED((vec2(9561.8386, -6622.8384) * -3.1));
     {
      int GLF_live10_looplimiter0 = 0;
      while(GLF_live10h < GLF_live10refh && GLF_live10i < 32)
       {
        if(GLF_live10_looplimiter0 >= 5)
         {
          break;
         }
        GLF_live10_looplimiter0 ++;
        GLF_live10coord -= GLF_live10uvstep;
        GLF_live10refh += GLF_live10slope;
        GLF_live10h = texture(tex, GLF_live10coord).y;
        GLF_live10i ++;
       }
     }
    }
    {
     GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10]((74294 % 24174), -92455, (46776 ^ -24138), -83681, (-77077 << 43186), 35046, -21594, -65601, 4190, -38663)));
     int GLF_live20i = _GLF_FUZZED(89704);
     {
      GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 3;
     }
    }
    GLF_live6_looplimiter1 ++;
    GLF_live6currentNode = GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6index, 10)];
    if(GLF_live6currentNode.data == GLF_live6target)
     {
      return GLF_live6target;
     }
    GLF_live6index = GLF_live6target > GLF_live6currentNode.data ? GLF_live6currentNode.rightIndex : GLF_live6currentNode.leftIndex;
   }
  {
   {
    1;
   }
  }
 }
 return - 1;
}
precision highp float;

mediump vec4 GLF_live9gl_FragCoord = _GLF_FUZZED(vec4(0.6, -890.715, 16.92, -8.8));

layout(set = 0, binding = 5) uniform buf5 {
 vec2 GLF_live9resolution;
};
vec3 GLF_live9pickColor(int GLF_live9i)
{
 return vec3(float(GLF_live9i) / 50.0, float(GLF_live9i) / 120.0, float(GLF_live9i) / 140.0);
}
vec3 GLF_live9mand(float GLF_live9xCoord, float GLF_live9yCoord)
{
 {
  {
   1;
  }
 }
 float GLF_live9height = GLF_live9resolution.y;
 float GLF_live9width = GLF_live9resolution.x;
 float GLF_live9xpos = GLF_live9xCoord * 0.1 + (GLF_live9resolution.x * 0.6);
 float GLF_live9ypos = GLF_live9yCoord * 0.1 + (GLF_live9resolution.y * 0.4);
 float GLF_live9c_re = 0.8 * (GLF_live9xpos - GLF_live9width / 2.0) * 4.0 / GLF_live9width - 0.4;
 float GLF_live9c_im = 0.8 * (GLF_live9ypos - GLF_live9height / 2.0) * 4.0 / GLF_live9width;
 float GLF_live9x = 0.0, GLF_live9y = 0.0;
 {
  int GLF_live15_looplimiter0 = 0;
  if(GLF_live15_looplimiter0 >= 4)
   {
    1;
   }
 }
 int GLF_live9iteration = 0;
 {
  int GLF_live9_looplimiter0 = 0;
  for(int GLF_live9k = 0; GLF_live9k < 1000; GLF_live9k ++)
   {
    if(GLF_live9_looplimiter0 >= 7)
     {
      break;
     }
    {
     GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](-79605, 60985, 90319, 11364, -51154, 15216, -96882, 76023, -65803, 54215)));
     int GLF_live20i = _GLF_FUZZED(-27496);
     if(GLF_live20i == 9)
      {
       GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 29;
      }
    }
    GLF_live9_looplimiter0 ++;
    if(GLF_live9x * GLF_live9x + GLF_live9y * GLF_live9y > 4.0)
     {
      break;
     }
    {
     int GLF_live11msb10 = _GLF_FUZZED(50533);
     float GLF_live11data[10] = _GLF_FUZZED(float[10](532.585, 2.5, -0.7, -77.64, -1.0, 3163.1501, -58.01, 7.3, -700.856, 0.5));
     int GLF_live11i = _GLF_FUZZED(15375);
     int GLF_live11_looplimiter1 = 0;
     uint GLF_live11uselessOutVariable = _GLF_FUZZED(uvec4(21626u, 50043u, 150732u, 165964u).p);
     for(int GLF_live11j = bitfieldExtract(int(GLF_live11injectionSwitch.x), 0, 0); GLF_live11j < findLSB(GLF_live11msb10); GLF_live11j ++)
      {
       if(GLF_live11_looplimiter1 >= 3)
        {
         break;
        }
       GLF_live11_looplimiter1 ++;
       if(uint(GLF_live11j) < uaddCarry(uint(GLF_live11i), 1u, GLF_live11uselessOutVariable))
        {
         {
          vec3 GLF_live16color = _GLF_FUZZED(((mat2x3(5.1, 45.42, 152.702, 7487.7888, 4.9, -50.85) * vec2(-2537.8376, -72.00)) + vec3(-2256.1574, 3.3, -71.02)));
          vec2 GLF_live16grid = _GLF_FUZZED(vec2(172.551, 9.9));
          {
           int GLF_live16count = int(GLF_live16injectionSwitch.x);
           {
            int GLF_live16_looplimiter3 = 0;
            do
             {
              if(GLF_live16_looplimiter3 >= 3)
               {
                break;
               }
              GLF_live16_looplimiter3 ++;
              GLF_live16color += GLF_live16palette(vec3(0.5, float(GLF_live16obj.numbers[8]) * 0.1, 0.2), vec3(0.5), trunc(vec3(GLF_live16injectionSwitch.y)), vec3(float(GLF_live16obj.numbers[4]) * 0.1, GLF_live16injectionSwitch.x, 0.6));
              GLF_live16count ++;
             }
            while(GLF_live16count != GLF_live16obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(int(GLF_live16injectionSwitch.x), 10)]);
           }
           {
            int GLF_live21iters = _GLF_FUZZED(25240);
            int GLF_live21v = _GLF_FUZZED(int(102170u));
            int GLF_live21i = _GLF_FUZZED(3858);
            {
             int GLF_live21_looplimiter0 = 0;
             for(             GLF_live21i = 0;
 GLF_live21i < GLF_live21iters; GLF_live21i ++)
              {
               if(GLF_live21_looplimiter0 >= 6)
                {
                 break;
                }
               GLF_live21_looplimiter0 ++;
               GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
              }
            }
           }
           GLF_live16grid = vec2(GLF_live16count + GLF_live16obj.numbers[8], GLF_live16count + GLF_live16obj.numbers[6]);
          }
         }
         continue;
        }
       {
        GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](12938, 15064, 44720, (false ? 84167 : 87059), -12139, 33293, -43112, -71114, 18731, 75306)));
        int GLF_live20i = _GLF_FUZZED(-32003);
        if(GLF_live20i == 3)
         {
          GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 7;
         }
        else
         if(GLF_live20i == 4)
          {
           GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 11;
          }
         else
          if(GLF_live20i == 5)
           {
            GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 13;
           }
          else
           if(GLF_live20i == 6)
            {
             GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 17;
            }
           else
            if(GLF_live20i == 7)
             {
              GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 19;
             }
            else
             if(GLF_live20i == 8)
              {
               GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 23;
              }
             else
              if(GLF_live20i == 9)
               {
                GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 29;
               }
       }
       bool GLF_live11doSwap = GLF_live11checkSwap(GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11i, 10)], GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11j, 10)]);
       if(GLF_live11doSwap)
        {
         {
          float GLF_live17th = _GLF_FUZZED(6252.7234);
          vec2 GLF_live17v = _GLF_FUZZED(vec2(6.8, -20.74));
          if(GLF_live17v.x < 0.0)
           {
            GLF_live17th = 1.0 - GLF_live17th;
           }
         }
         {
          vec3 GLF_live20color = _GLF_FUZZED(vec3(-7247.6933, -284.617, -7330.4291));
          {
           GLF_live20color.yz += GLF_live20color.yz;
          }
         }
         float GLF_live11temp = GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11i, 10)];
         GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11i, 10)] = GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11j, 10)];
         GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11j, 10)] = GLF_live11temp;
         {
          {
           1;
          }
         }
        }
      }
    }
    float GLF_live9x_new = GLF_live9x * GLF_live9x - GLF_live9y * GLF_live9y + GLF_live9c_re;
    GLF_live9y = 2.0 * GLF_live9x * GLF_live9y + GLF_live9c_im;
    {
     {
      1;
     }
    }
    GLF_live9x = GLF_live9x_new;
    GLF_live9iteration ++;
    {
     {
      1;
     }
    }
   }
 }
 if(GLF_live9iteration < 1000)
  {
   return GLF_live9pickColor(GLF_live9iteration);
   {
    {
     GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](19093, -36810, -54763, 81332, -54755, -98942, 65847, -7437, -40212, 19093)));
     int GLF_live20i = _GLF_FUZZED(int(-5539.3886));
     if(GLF_live20i == 7)
      {
       GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 19;
      }
     else
      if(GLF_live20i == 8)
       {
        GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 23;
       }
      else
       if(GLF_live20i == 9)
        {
         GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 29;
        }
    }
    {
     1;
    }
   }
   {
    int GLF_live18_looplimiter0 = 0;
    int GLF_live18i = _GLF_FUZZED((+ -99986));
    float GLF_live18A[50] = _GLF_FUZZED(float[50](-6.9, -2.9, float(163897u), -61.81, (-0.3), 8797.7957, -5631.8226, 50.50, 4.0, -3.1, 7746.5629, -6107.7889, float(true), (false ? float(40519) : -1649.3810), -2.6, -12.58, 8.3, -8.6, 46.73, -3.1, -5631.8226, 8.3, 46.73, -8.6, -12.58, -2.9, 50.50, (-0.3), 8797.7957, -61.81, float(true), float(163897u), 7746.5629, 4.0, -2.6, (false ? float(40519) : -1649.3810), -6107.7889, -6.9, 50.50, 46.73, -6.9, -3.1, -2.6, -8.6, 7746.5629, -2.9, -61.81, 4.0, -12.58, -5631.8226));
    do
     {
      if(GLF_live18_looplimiter0 >= 5)
       {
        break;
       }
      GLF_live18_looplimiter0 ++;
      if(GLF_live18i >= int(GLF_live18resolution.x))
       {
        break;
       }
      if(findLSB(16) * (GLF_live18i / findMSB(16)) == GLF_live18i)
       {
        GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(GLF_live18i / findLSB(16), 50)] = float(GLF_live18i);
       }
      GLF_live18i ++;
     }
    while(GLF_live18i < bitfieldInsert(200, 0, 0, 0));
   }
  }
 else
  {
   return vec3(GLF_live9xCoord / GLF_live9resolution.x, 0.0, GLF_live9yCoord / GLF_live9resolution.y);
  }
}
precision highp float;

mediump vec4 GLF_live8gl_FragCoord = _GLF_FUZZED(vec4(-0.6, 0.4, -1239.1748, 762.758));

layout(push_constant) uniform buf_push {
 vec2 GLF_live8injectionSwitch;
};
layout(set = 0, binding = 6) uniform buf6 {
 vec2 GLF_live8resolution;
};
precision highp float;

precision highp float;

vec3 GLF_live2pickColor(int GLF_live2i)
{
 return vec3(float(GLF_live2i) / 50.0, float(GLF_live2i) / 120.0, float(GLF_live2i) / 140.0);
}
precision highp float;

precision highp int;

mediump vec4 GLF_live5gl_FragCoord = _GLF_FUZZED((mat4(2.7, 98.05, -80.03, 5577.9620, -934.294, -202.019, 676.758, 5492.2561, 871.189, -693.214, 4.9, -1516.9056, 992.951, -2.4, -4.4, 0.1) * vec4(-575.383, -1.8, -7.4, 413.210)));

layout(set = 0, binding = 7) uniform buf7 {
 vec2 GLF_live5resolution;
};
vec3 GLF_live5pickColor(int GLF_live5i)
{
 return vec3(float(GLF_live5i) / 50.0, float(GLF_live5i) / 120.0, float(GLF_live5i) / 140.0);
}
vec3 GLF_live5mand(float GLF_live5xCoord, float GLF_live5yCoord)
{
 float GLF_live5height = GLF_live5resolution.y;
 float GLF_live5width = GLF_live5resolution.x;
 {
  int GLF_live18i = _GLF_FUZZED(-49223);
  float GLF_live18A[50] = _GLF_FUZZED(float[50](-582.138, 8417.4777, 643.177, -16.94, -4.6, (50.93 * 1.0), 2589.7783, 9589.5921, 4719.2279, 3.3, (3469.6121 + -9042.4142), (-4.5 + 52.95), float(34377u), -5100.8384, (mat2x3(9124.6980, 4.1, -8997.5926, 3223.7870, 0.9, 291.747) * vec2(-94.77, 5687.8337)).y, -14.39, ((- -8.4) * -1012.1652), -9726.9904, -4.6, -14.39, 4719.2279, (mat2x3(9124.6980, 4.1, -8997.5926, 3223.7870, 0.9, 291.747) * vec2(-94.77, 5687.8337)).y, (-4.5 + 52.95), ((- -8.4) * -1012.1652), 2589.7783, -5100.8384, -582.138, -4.6, -4.6, (50.93 * 1.0), -9726.9904, 8417.4777, float(34377u), (3469.6121 + -9042.4142), 643.177, -16.94, 9589.5921, 3.3, -14.39, 8417.4777, (-4.5 + 52.95), 2589.7783, 3.3, 643.177, (50.93 * 1.0), ((- -8.4) * -1012.1652), -4.6, float(34377u), (3469.6121 + -9042.4142), 4719.2279));
  uint GLF_live18uselessOutVariable = _GLF_FUZZED((42270u - 55807u));
  if(GLF_live18i > findMSB(0))
   {
    GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(GLF_live18i, 50)] += GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(int(usubBorrow(uint(GLF_live18i), 1u, GLF_live18uselessOutVariable)), 50)];
   }
 }
 float GLF_live5xpos = GLF_live5xCoord * 0.1 + (GLF_live5resolution.x * 0.6);
 {
  int GLF_live6_looplimiter2 = 0;
  int GLF_live6sum = _GLF_FUZZED((-73102 << -31259));
  for(int GLF_live6target = 0; GLF_live6target < 20; GLF_live6target ++)
   {
    if(GLF_live6_looplimiter2 >= 4)
     {
      break;
     }
    GLF_live6_looplimiter2 ++;
    int GLF_live6result = GLF_live6search(GLF_live6target);
    {
     {
      false;
     }
    }
    if(GLF_live6result > 0)
     {
      GLF_live6sum += GLF_live6result;
      {
       int GLF_live19from = _GLF_FUZZED((- 17836));
       int GLF_live19to = _GLF_FUZZED((false ? (true ? 98437 : -57571) : 37781));
       {
        int GLF_live19_looplimiter2 = 0;
        for(int GLF_live19i = GLF_live19from; GLF_live19i <= GLF_live19to; GLF_live19i ++)
         {
          if(GLF_live19_looplimiter2 >= 5)
           {
            break;
           }
          GLF_live19_looplimiter2 ++;
          GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = GLF_live19temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)];
         }
       }
      }
     }
    else
     {
      switch(GLF_live6result)
       {
        case - 1:
        GLF_live6sum += 1;
        break;
        case 0:
        {
         vec3 GLF_live19vecCoor = _GLF_FUZZED(vec3(-1.9, 3.5, -709.631));
         vec2 GLF_live19color = _GLF_FUZZED(vec2(-811.841, -816.785));
         {
          GLF_live19color = fract(sin(GLF_live19vecCoor.yx - trunc(float(GLF_live19data[2]))));
          GLF_live19color.x += atanh(GLF_live19color.x) * cosh(GLF_live19injectionSwitch.y) * smoothstep(GLF_live19color, GLF_live19injectionSwitch, GLF_live19gl_FragCoord.yy).x;
          1;
         }
        }
        1;
       }
     }
   }
 }
 float GLF_live5ypos = GLF_live5yCoord * 0.1 + (GLF_live5resolution.y * 0.4);
 {
  float GLF_live10refh = _GLF_FUZZED(66.27);
  vec2 GLF_live10uvstep = _GLF_FUZZED(vec2(5268.9784, -49.03));
  {
   int GLF_live19_looplimiter6 = 0;
   if(GLF_live19_looplimiter6 >= 5)
    {
     1;
    }
  }
  float GLF_live10slope = _GLF_FUZZED(vec3(8.2, 5.7, 606.265).s);
  float GLF_live10h = _GLF_FUZZED(0.8);
  int GLF_live10i = _GLF_FUZZED((-77685 | (-76236 + 29496)));
  vec2 GLF_live10coord = _GLF_FUZZED(vec2(-5552.5185, -62.73));
  {
   int GLF_live10_looplimiter0 = 0;
   while(GLF_live10h < GLF_live10refh && GLF_live10i < 32)
    {
     if(GLF_live10_looplimiter0 >= 5)
      {
       break;
      }
     GLF_live10_looplimiter0 ++;
     GLF_live10coord -= GLF_live10uvstep;
     GLF_live10refh += GLF_live10slope;
     GLF_live10h = texture(tex, GLF_live10coord).y;
     {
      vec3 GLF_live14setting = _GLF_FUZZED(vec3(-110.596, 57.35, -266.383));
      vec2 GLF_live14pos = _GLF_FUZZED((- vec2(74.46, 36.71)));
      {
       GLF_live14computeColor(GLF_live14setting.z / 40.0, GLF_live14pos);
       {
        {
         vec2 GLF_live21pos = GLF_live21gl_FragCoord.xy / GLF_live21resolution;
         ivec2 GLF_live21lin = ivec2(int(GLF_live21pos.x * 10.0), int(GLF_live21pos.y * 10.0));
         int GLF_live21iters = GLF_live21lin.x + GLF_live21lin.y * 10;
         int GLF_live21v = 100;
         int GLF_live21i = _GLF_FUZZED(-36450);
         {
          int GLF_live21_looplimiter0 = 0;
          for(          GLF_live21i = 0;
 GLF_live21i < GLF_live21iters; GLF_live21i ++)
           {
            if(GLF_live21_looplimiter0 >= 6)
             {
              break;
             }
            GLF_live21_looplimiter0 ++;
            GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
           }
         }
         GLF_live21_GLF_color = GLF_live21pal[_GLF_MAKE_IN_BOUNDS_INT(GLF_live21v % 16, 16)];
        }
       }
      }
     }
     GLF_live10i ++;
    }
  }
 }
 float GLF_live5c_re = 0.8 * (GLF_live5xpos - GLF_live5width / 2.0) * 4.0 / GLF_live5width - 0.4;
 {
  int GLF_live21_looplimiter0 = 0;
  int GLF_live21v = _GLF_FUZZED((+ 9485));
  {
   if(GLF_live21_looplimiter0 >= 6)
    {
     1;
    }
   GLF_live21_looplimiter0 ++;
   GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
  }
 }
 float GLF_live5c_im = 0.8 * (GLF_live5ypos - GLF_live5height / 2.0) * 4.0 / GLF_live5width;
 {
  int GLF_live11msb10 = _GLF_FUZZED(-62852);
  float GLF_live11data[10] = _GLF_FUZZED(float[10](-8642.5193, 8.4, 9.1, float(78984u), float(-59256), (false ? 5.8 : 3.1), (-2.6 - -19.69), -8.2, -8642.5193, 8.4));
  int GLF_live11i = _GLF_FUZZED(5332);
  uint GLF_live11uselessOutVariable = _GLF_FUZZED((17090u + 57445u));
  int GLF_live11_looplimiter2 = 0;
  int GLF_live11msb9 = _GLF_FUZZED(5259);
  do
   {
    if(GLF_live11_looplimiter2 >= 3)
     {
      break;
     }
    GLF_live11_looplimiter2 ++;
    {
     {
      int GLF_live19i = _GLF_FUZZED(7389);
      {
       int GLF_live19_looplimiter5 = 0;
       do
        {
         if(GLF_live19_looplimiter5 >= 5)
          {
           break;
          }
         GLF_live19_looplimiter5 ++;
         switch(GLF_live19i)
          {
           case 0:
           GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = 4;
           break;
           case 1:
           GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = 3;
           break;
           case 2:
           GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = 2;
           break;
           case 3:
           GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = 1;
           break;
           case 4:
           GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = 0;
           break;
           case 5:
           GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = - 1;
           break;
           case 6:
           GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = - 2;
           break;
           case 7:
           GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = - 3;
           break;
           case 8:
           GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = - 4;
           break;
           case 9:
           GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = - 5;
           break;
          }
         GLF_live19i ++;
        }
       while(GLF_live19i < 10);
      }
     }
     int GLF_live11_looplimiter1 = 0;
     for(int GLF_live11j = bitfieldExtract(int(GLF_live11injectionSwitch.x), 0, 0); GLF_live11j < findLSB(GLF_live11msb10); GLF_live11j ++)
      {
       if(GLF_live11_looplimiter1 >= 3)
        {
         break;
        }
       GLF_live11_looplimiter1 ++;
       if(uint(GLF_live11j) < uaddCarry(uint(GLF_live11i), 1u, GLF_live11uselessOutVariable))
        {
         continue;
        }
       bool GLF_live11doSwap = GLF_live11checkSwap(GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11i, 10)], GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11j, 10)]);
       if(GLF_live11doSwap)
        {
         float GLF_live11temp = GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11i, 10)];
         GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11i, 10)] = GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11j, 10)];
         GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11j, 10)] = GLF_live11temp;
        }
      }
     {
      {
       int GLF_live19j = _GLF_FUZZED(1035);
       int GLF_live19k = _GLF_FUZZED(-63695);
       int GLF_live19mid = _GLF_FUZZED(-57261);
       int GLF_live19i = _GLF_FUZZED((-69808 << -47131));
       int GLF_live19to = _GLF_FUZZED((-3193 | -68893));
       {
        int GLF_live19_looplimiter0 = 0;
        while(GLF_live19i <= GLF_live19mid && GLF_live19j <= GLF_live19to)
         {
          if(GLF_live19_looplimiter0 >= 5)
           {
            break;
           }
          GLF_live19_looplimiter0 ++;
          if(GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] < GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19j, 10)])
           {
            GLF_live19temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19k ++, 10)] = GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i ++, 10)];
           }
          else
           {
            GLF_live19temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19k ++, 10)] = GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19j ++, 10)];
           }
         }
       }
      }
      float GLF_live17th = _GLF_FUZZED(-7426.1130);
      vec2 GLF_live17v = _GLF_FUZZED(vec2(7.7, 1.6));
      if(GLF_live17v.x < 0.0)
       {
        GLF_live17th = 1.0 - GLF_live17th;
       }
     }
    }
    GLF_live11i ++;
    {
     vec2 GLF_live14position = _GLF_FUZZED((vec2(-184.642, -378.614)));
     {
      int GLF_live18i = _GLF_FUZZED(-72287);
      float GLF_live18A[50] = _GLF_FUZZED(float[50](6192.0446, -168.837, 6.6, (-2.3 / -7.9), -3.8, (-7.3 * -220.985), float(145571u), vec3(vec4(520.074, -5.9, -7.1, -4825.6152)).s, 7.9, vec2(-7.9, -3.5).y, 3.7, (-5.1 + 7.2), 88.72, 9.0, 45.96, -1.9, 645.973, 3.0, 2871.1663, -5843.2488, float(145571u), -5843.2488, 3.0, -3.8, 6.6, 9.0, vec2(-7.9, -3.5).y, (-7.3 * -220.985), vec3(vec4(520.074, -5.9, -7.1, -4825.6152)).s, 3.7, 45.96, -168.837, (-2.3 / -7.9), -1.9, 88.72, 2871.1663, 645.973, 7.9, (-5.1 + 7.2), 6192.0446, (-5.1 + 7.2), 3.7, 3.0, -3.8, 9.0, -168.837, -5843.2488, -1.9, 7.9, 2871.1663));
      if(findLSB(16) * (GLF_live18i / findMSB(16)) == GLF_live18i)
       {
        GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(GLF_live18i / findLSB(16), 50)] = float(GLF_live18i);
       }
     }
     vec2 GLF_live14center = _GLF_FUZZED((+ (vec2(3.7, 593.233) - 49.40)));
     {
      int GLF_live19m = _GLF_FUZZED(int(false));
      int GLF_live19_looplimiter3 = 0;
      int GLF_live19low = _GLF_FUZZED(-47010);
      int GLF_live19high = _GLF_FUZZED(45144);
      for(int GLF_live19i = GLF_live19low; GLF_live19i < GLF_live19high; GLF_live19i += 2 * GLF_live19m)
       {
        if(GLF_live19_looplimiter3 >= 5)
         {
          break;
         }
        GLF_live19_looplimiter3 ++;
        int GLF_live19from = GLF_live19i;
        int GLF_live19mid = GLF_live19i + GLF_live19m - 1;
        int GLF_live19to = min(GLF_live19i + 2 * GLF_live19m - 1, GLF_live19high);
        GLF_live19merge(GLF_live19from, GLF_live19mid, GLF_live19to);
       }
     }
     vec3 GLF_live14result = _GLF_FUZZED((- vec3(-8.0, 42.87, 89.72)));
     int GLF_live14_looplimiter0 = 0;
     for(int GLF_live14i = 35; GLF_live14i >= 0; GLF_live14i --)
      {
       if(GLF_live14_looplimiter0 >= 3)
        {
         break;
        }
       {
        GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](27950, 70344, 79111, 77403, -79431, -20071, -33521, 90366, -93053, 27950)));
        int GLF_live20i = _GLF_FUZZED(85136);
        if(GLF_live20i == 5)
         {
          GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 13;
         }
        else
         if(GLF_live20i == 6)
          {
           GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 17;
          }
         else
          if(GLF_live20i == 7)
           {
            GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 19;
           }
          else
           if(GLF_live20i == 8)
            {
             GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 23;
            }
           else
            if(GLF_live20i == 9)
             {
              GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 29;
             }
       }
       GLF_live14_looplimiter0 ++;
       vec3 GLF_live14d = _GLF_FUZZED(atan(vec3(910.433, -375.174, -3.6)));
       GLF_live14d = GLF_live14drawShape(GLF_live14position, GLF_live14center + vec2(sin(float(GLF_live14i) / 10.0 + GLF_live14time) / 4.0, 0.0), vec3(0.01 + sin(float(GLF_live14i) / 100.0), 0.01, float(GLF_live14i)));
       if(length(GLF_live14d) <= 0.0)
        {
         continue;
        }
       GLF_live14result = vec3(GLF_live14d);
      }
    }
   }
  while(GLF_live11i < findMSB(GLF_live11msb9));
 }
 float GLF_live5x = 0.0, GLF_live5y = 0.0;
 if(0.0 > GLF_live5resolution.x)
  {
   GLF_live5x = 1.0;
   {
    GLF_live13BST GLF_live13tree = _GLF_FUZZED(GLF_live13BST(ivec2(-111, -19495).s, int(-4224.3882), -46415));
    int GLF_live13data = _GLF_FUZZED(67781);
    {
     GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](ivec2(-35588, -36116).g, -42157, -60405, -93079, -63000, -67082, -35108, -76350, 56527, 15158)));
     int GLF_live20i = _GLF_FUZZED(36580);
     if(GLF_live20i == 3)
      {
       GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 7;
      }
     else
      if(GLF_live20i == 4)
       {
        GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 11;
       }
      else
       if(GLF_live20i == 5)
        {
         GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 13;
        }
       else
        if(GLF_live20i == 6)
         {
          GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 17;
         }
        else
         if(GLF_live20i == 7)
          {
           GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 19;
          }
         else
          if(GLF_live20i == 8)
           {
            GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 23;
           }
          else
           if(GLF_live20i == 9)
            {
             GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 29;
            }
    }
    {
     GLF_live13tree.data = GLF_live13data;
     GLF_live13tree.leftIndex = - 1;
     GLF_live13tree.rightIndex = - 1;
     {
      GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](-55359, 77372, 19051, 16691, -45748, (17562), 43138, 35094, -97559, 11096)));
      int GLF_live20_looplimiter5 = 0;
      for(int GLF_live20i = 0; GLF_live20i < 10; GLF_live20i ++)
       {
        if(GLF_live20_looplimiter5 >= 7)
         {
          break;
         }
        GLF_live20_looplimiter5 ++;
        if(GLF_live20i == 0)
         {
          GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 2;
         }
        else
         if(GLF_live20i == 1)
          {
           GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 3;
          }
         else
          if(GLF_live20i == 2)
           {
            GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 5;
           }
          else
           if(GLF_live20i == 3)
            {
             GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 7;
            }
           else
            if(GLF_live20i == 4)
             {
              GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 11;
             }
            else
             if(GLF_live20i == 5)
              {
               GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 13;
              }
             else
              if(GLF_live20i == 6)
               {
                GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 17;
               }
              else
               if(GLF_live20i == 7)
                {
                 GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 19;
                }
               else
                if(GLF_live20i == 8)
                 {
                  GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 23;
                 }
                else
                 if(GLF_live20i == 9)
                  {
                   GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 29;
                  }
       }
     }
    }
   }
   GLF_live5y = 1.0;
  }
 int GLF_live5iteration = bitfieldReverse(int(GLF_live5x));
 int GLF_live5k = bitfieldExtract(int(GLF_live5y), bitCount(int(GLF_live5x)), int(GLF_live5y));
 int GLF_live5iterationCap = 1000;
 {
  int GLF_live5_looplimiter0 = 0;
  {
   vec2 GLF_live7v = _GLF_FUZZED(vec2(4.2, -9.4));
   {
    GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](96357, 80018, -99862, 63873, -10334, -7331, 37664, 60784, -59131, 97649)));
    int GLF_live20i = _GLF_FUZZED((40158 % ivec4(-99486, -31062, 70365, 23005).x));
    {
     GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 11;
    }
   }
   float GLF_live7th = _GLF_FUZZED(-8281.8125);
   if(GLF_live7v.x < 0.0)
    {
     GLF_live7th = 1.0 - GLF_live7th;
    }
  }
  do
   {
    if(GLF_live5_looplimiter0 >= 5)
     {
      {
       {
        vec2 GLF_live21pos = GLF_live21gl_FragCoord.xy / GLF_live21resolution;
        ivec2 GLF_live21lin = ivec2(int(GLF_live21pos.x * 10.0), int(GLF_live21pos.y * 10.0));
        int GLF_live21iters = GLF_live21lin.x + GLF_live21lin.y * 10;
        int GLF_live21v = 100;
        int GLF_live21i = _GLF_FUZZED(-36450);
        {
         int GLF_live21_looplimiter0 = 0;
         for(         GLF_live21i = 0;
 GLF_live21i < GLF_live21iters; GLF_live21i ++)
          {
           if(GLF_live21_looplimiter0 >= 6)
            {
             break;
            }
           GLF_live21_looplimiter0 ++;
           GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
          }
        }
        GLF_live21_GLF_color = GLF_live21pal[_GLF_MAKE_IN_BOUNDS_INT(GLF_live21v % 16, 16)];
       }
      }
      break;
     }
    GLF_live5_looplimiter0 ++;
    if(GLF_live5x * GLF_live5x + GLF_live5y * GLF_live5y > 4.0)
     {
      break;
     }
    float GLF_live5x_new = GLF_live5x * GLF_live5x - GLF_live5y * GLF_live5y + GLF_live5c_re;
    GLF_live5y = 2.0 * GLF_live5x * GLF_live5y + GLF_live5c_im;
    GLF_live5x = GLF_live5x_new;
    GLF_live5iteration ++;
    GLF_live5k ++;
    {
     {
      {
       1;
      }
     }
     vec3 GLF_live8m = _GLF_FUZZED(vec3(8.2, 2.5, -479.363));
     {
      int GLF_live15_looplimiter1 = 0;
      vec3 GLF_live15c = _GLF_FUZZED(((true != false) ? vec3(-188.229) : vec3(7.2, 118.318, -52.23)));
      for(int GLF_live15i = 0; GLF_live15i < 3; GLF_live15i ++)
       {
        if(GLF_live15_looplimiter1 >= 4)
         {
          break;
         }
        GLF_live15_looplimiter1 ++;
        if(GLF_live15c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15i, 3)] >= 1.0)
         {
          GLF_live15c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15i, 3)] = GLF_live15c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15i, 3)] * GLF_live15c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15i, 3)];
         }
       }
     }
     int GLF_live8j = _GLF_FUZZED(46534);
     vec2 GLF_live8n = _GLF_FUZZED(vec2((-5.0 - -2.1)));
     int GLF_live8_looplimiter2 = 0;
     {
      if(GLF_live8_looplimiter2 >= 3)
       {
        1;
       }
      GLF_live8_looplimiter2 ++;
      {
       {
        {
         1;
        }
       }
       int GLF_live8_looplimiter1 = 0;
       {
        float GLF_live18A[50] = _GLF_FUZZED(float[50](959.065, float(120899u), 387.225, vec3(0.1, 65.40, -232.522).p, -3585.0630, float((ivec4(42275, 65599, 16998, -61908) == ivec4(76824, 7039, -63050, -61899))), 49.85, -180.379, 5.4, -1.3, 3.1, 6.2, -2.4, 26.07, 44.71, float(false), -98.72, 2.8, (0.2 + -324.281), -6.1, float(120899u), -2.4, vec3(0.1, 65.40, -232.522).p, 387.225, float((ivec4(42275, 65599, 16998, -61908) == ivec4(76824, 7039, -63050, -61899))), 5.4, 6.2, 26.07, float(false), 44.71, -1.3, -3585.0630, -6.1, 2.8, 959.065, (0.2 + -324.281), 3.1, 49.85, -98.72, -180.379, 3.1, float((ivec4(42275, 65599, 16998, -61908) == ivec4(76824, 7039, -63050, -61899))), float(120899u), -2.4, -3585.0630, -180.379, 2.8, -1.3, 5.4, float(false)));
        {
         GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(45, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(49, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
        }
       }
       for(int GLF_live8i = - 1; GLF_live8i <= int(GLF_live8injectionSwitch.y); GLF_live8i ++)
        {
         if(GLF_live8_looplimiter1 >= 3)
          {
           break;
          }
         {
          vec3 GLF_live19vecCoor = _GLF_FUZZED((-6.5 * vec3(7.3, 3.7, -6.7)));
          vec2 GLF_live19color = _GLF_FUZZED(vec2(-9030.1452, -82.51));
          if(int(GLF_live19gl_FragCoord[1]) < 270)
           {
            GLF_live19color = fract(sin(GLF_live19vecCoor.yx - trunc(float(GLF_live19data[7]))));
            GLF_live19color.y *= mix(normalize(GLF_live19vecCoor), normalize(vec3(GLF_live19color, degrees(GLF_live19color.x))), GLF_live19injectionSwitch.x).y;
            1;
           }
          else
           {
            1;
           }
         }
         GLF_live8_looplimiter1 ++;
         vec2 GLF_live8g = vec2(float(GLF_live8j), float(GLF_live8i));
         vec2 GLF_live8o = mix(GLF_live8n, GLF_live8g, 0.2);
         if(GLF_live8injectionSwitch.x < (GLF_live8m.x))
          {
           int GLF_live8k = 1;
           {
            {
             {
              GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10]((-14840 << 36266), -18528, 13231, -5455, -29666, ivec4(43720, 90988, 195, -43787).t, 34214, -83996, -14553, -5455)));
              int GLF_live20i = _GLF_FUZZED(-71009);
              if(GLF_live20i == 4)
               {
                GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 11;
               }
              else
               if(GLF_live20i == 5)
                {
                 GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 13;
                }
               else
                if(GLF_live20i == 6)
                 {
                  GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 17;
                 }
                else
                 if(GLF_live20i == 7)
                  {
                   GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 19;
                  }
                 else
                  if(GLF_live20i == 8)
                   {
                    GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 23;
                   }
                  else
                   if(GLF_live20i == 9)
                    {
                     GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 29;
                    }
             }
             vec2 GLF_live17coord = GLF_live17gl_FragCoord.xy * (1.0 / 256.0);
             GLF_live17coord = GLF_live17polarize(GLF_live17coord);
             GLF_live17coord = floor(GLF_live17coord * 256.0) / 256.0;
             GLF_live17_GLF_color = vec4(texture(tex, GLF_live17coord).xyz, 1.0);
            }
            {
             GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](-28116, -52026, -28705, 99659, (-83943 ^ -96640), 59512, -62885, int(52820u), 60742, int(63480u))));
             vec3 GLF_live20color = _GLF_FUZZED((vec3(1123.2946, -7.4, -64.12) - vec3(-7.7, -675.035, -2.5)));
             if(GLF_live20binarySearch(GLF_live20obj, GLF_live20obj.prime_numbers[4]) != - (int(GLF_live20resolution.y)) && GLF_live20binarySearch(GLF_live20obj, GLF_live20obj.prime_numbers[0]) >= - (int(GLF_live20resolution.x)))
              {
               GLF_live20color.yz -= dot(float(GLF_live20binarySearch(GLF_live20obj, GLF_live20obj.prime_numbers[4])), float(GLF_live20binarySearch(GLF_live20obj, GLF_live20obj.prime_numbers[0])));
              }
             else
              {
               1;
              }
            }
           }
           {
            {
             float GLF_live15result = _GLF_FUZZED((29.29 / -2365.7469));
             {
              GLF_live15result;
             }
            }
            int GLF_live8_looplimiter0 = 0;
            while(GLF_live8k >= 0)
             {
              if(GLF_live8_looplimiter0 >= 3)
               {
                break;
                {
                 GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](-44683, 99958, 54275, 89131, -24386, ivec3(-18955, 9734, 11149).r, 77250, 85360, 15500, 15500)));
                 int GLF_live20i = _GLF_FUZZED((27215 & -66516));
                 {
                  GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 7;
                 }
                }
               }
              {
               vec2 GLF_live17v = _GLF_FUZZED(vec2(7.2, -41.84));
               {
                float GLF_live17pi2 = 1.0 / (355.0 / 113.0);
                if(length(GLF_live17v) < 0.001)
                 {
                  0.0;
                 }
                vec2 GLF_live17a = abs(GLF_live17v);
                float GLF_live17z = _GLF_FUZZED(-1058.5550);
                if(GLF_live17a.y > GLF_live17a.x)
                 {
                  GLF_live17z = GLF_live17a.x / GLF_live17a.y;
                 }
                else
                 {
                  GLF_live17z = GLF_live17a.y / GLF_live17a.x;
                 }
                float GLF_live17th = (0.97 - 0.19 * GLF_live17z * GLF_live17z) * GLF_live17z * GLF_live17pi2;
                if(GLF_live17a.y < GLF_live17a.x)
                 {
                  GLF_live17th = 0.5 - GLF_live17th;
                 }
                if(GLF_live17v.x < 0.0)
                 {
                  GLF_live17th = 1.0 - GLF_live17th;
                 }
                {
                 int GLF_live21_looplimiter0 = 0;
                 if(GLF_live21_looplimiter0 >= 6)
                  {
                   1;
                  }
                }
                if(GLF_live17v.y < 0.0)
                 {
                  GLF_live17th = - GLF_live17th;
                  {
                   {
                    int GLF_live19_looplimiter6 = 0;
                    for(int GLF_live19j = 0; GLF_live19j < 10; GLF_live19j ++)
                     {
                      if(GLF_live19_looplimiter6 >= 5)
                       {
                        break;
                       }
                      GLF_live19_looplimiter6 ++;
                      GLF_live19temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19j, 10)] = GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19j, 10)];
                     }
                   }
                  }
                 }
                {
                 int GLF_live19j = _GLF_FUZZED(-49586);
                 int GLF_live19k = _GLF_FUZZED(86022);
                 int GLF_live19i = _GLF_FUZZED(12873);
                 if(GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] < GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19j, 10)])
                  {
                   GLF_live19temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19k ++, 10)] = GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i ++, 10)];
                  }
                 else
                  {
                   GLF_live19temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19k ++, 10)] = GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19j ++, 10)];
                  }
                }
                GLF_live17th;
               }
              }
              GLF_live8_looplimiter0 ++;
              GLF_live8o = GLF_live8o + GLF_live8o;
              GLF_live8k --;
              {
               {
                1;
               }
              }
             }
           }
           GLF_live8m = vec3(GLF_live8injectionSwitch.x, cos(GLF_live8o));
          }
         {
          {
           1;
          }
         }
         {
          {
           {
            1;
           }
          }
          {
           vec3(0.0);
          }
         }
        }
       {
        int GLF_live19_looplimiter2 = 0;
        if(GLF_live19_looplimiter2 >= 5)
         {
          1;
         }
       }
       {
        vec2 GLF_live10uvstep = _GLF_FUZZED(vec2(-59.51, 429.494));
        float GLF_live10refh = _GLF_FUZZED(float(true));
        float GLF_live10slope = _GLF_FUZZED(((-5.8 / 912.900) / -7.3));
        float GLF_live10h = _GLF_FUZZED(2.1);
        {
         {
          {
           1;
          }
         }
         int GLF_live15_looplimiter1 = 0;
         vec3 GLF_live15c = _GLF_FUZZED((vec3(-2120.9967, 5.7, 48.48) * vec3(8.7, -677.045, 8.3)).yzz);
         for(int GLF_live15i = 0; GLF_live15i < 3; GLF_live15i ++)
          {
           if(GLF_live15_looplimiter1 >= 4)
            {
             break;
            }
           GLF_live15_looplimiter1 ++;
           if(GLF_live15c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15i, 3)] >= 1.0)
            {
             GLF_live15c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15i, 3)] = GLF_live15c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15i, 3)] * GLF_live15c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15i, 3)];
            }
          }
        }
        int GLF_live10_looplimiter0 = 0;
        vec2 GLF_live10coord = _GLF_FUZZED(vec2(17.52, 9.6));
        int GLF_live10i = _GLF_FUZZED((-26986 ^ -65004));
        {
         if(GLF_live10_looplimiter0 >= 5)
          {
           1;
          }
         GLF_live10_looplimiter0 ++;
         GLF_live10coord -= GLF_live10uvstep;
         GLF_live10refh += GLF_live10slope;
         GLF_live10h = texture(tex, GLF_live10coord).y;
         GLF_live10i ++;
        }
       }
      }
     }
    }
   }
  while(GLF_live5k < bitfieldInsert(GLF_live5iterationCap + (257.0 > GLF_live5resolution.y ? 1 : 0), 0, 0, 0));
 }
 if(0.0 > GLF_live5resolution.y)
  {
   {
    float GLF_live17th = _GLF_FUZZED(float(93490));
    vec2 GLF_live17v = _GLF_FUZZED(vec2(5.2, -6536.5704));
    if(GLF_live17v.x < 0.0)
     {
      GLF_live17th = 1.0 - GLF_live17th;
     }
   }
   GLF_live5iterationCap += 1;
  }
 if(GLF_live5iteration < bitfieldInsert(GLF_live5iterationCap, 0, 0, 0))
  {
   return GLF_live5pickColor(GLF_live5iteration);
  }
 else
  {
   return vec3(GLF_live5xCoord / GLF_live5resolution.x, 0.0, GLF_live5yCoord / GLF_live5resolution.y);
  }
}
precision highp float;

precision highp int;

vec4 GLF_live3_GLF_color = _GLF_FUZZED(vec4(3683.2744, 5457.7151, -9.7, -1.9));

precision highp float;

mediump vec4 GLF_live4gl_FragCoord = _GLF_FUZZED(vec4(-87.98, 44.16, 481.376, -5927.0922));

vec4 GLF_live4_GLF_color = _GLF_FUZZED(vec4(-773.480, -17.61, -9.5, -637.187));

layout(set = 0, binding = 8) uniform sampler2D GLF_live4tex;

precision highp int;

precision highp float;

mediump vec4 GLF_live1gl_FragCoord = _GLF_FUZZED(((-6.8 / (mat3x4(-1425.2457, -53.10, -551.496, 361.058, 9.0, 5617.3499, -7.0, 5.1, 692.882, -6.4, 5079.8569, -5.4) - 1.0)) * vec3(831.191, 7128.2841, -7.7)));

vec4 GLF_live1_GLF_color = _GLF_FUZZED(vec4(0.0, -7894.5844, -5.1, 15.39));

precision highp float;

precision highp int;

const int GLF_live0N = 10;

int GLF_live0data[10] = _GLF_FUZZED(int[10]((28477 / GLF_live0N), -2194, 58009, -20630, GLF_live0N, GLF_live0N, -22842, GLF_live0N, (+ 91665), GLF_live0N));

precision highp float;

layout(location = 0) out vec4 _GLF_color;

void main()
{
 _GLF_color = texture(tex, gl_FragCoord.xy * (1.0 / 256.0));
 {
  {
   ivec2 GLF_live1icoord = ivec2(255, 255) - ivec2(GLF_live1gl_FragCoord.xy);
   int GLF_live1A = (GLF_live1icoord.x & 1) != 0 ? 0 : ~ 0;
   int GLF_live1B = (GLF_live1icoord.x & 2) != 0 ? 0 : ~ 0;
   int GLF_live1C = (GLF_live1icoord.x & 4) != 0 ? 0 : ~ 0;
   int GLF_live1D = (GLF_live1icoord.x & 8) != 0 ? 0 : ~ 0;
   {
    float GLF_live17z = _GLF_FUZZED(vec2(-40.00, -3.1).r);
    vec2 GLF_live17a = _GLF_FUZZED(vec2(-4540.6889, 319.731));
    if(GLF_live17a.y > GLF_live17a.x)
     {
      GLF_live17z = GLF_live17a.x / GLF_live17a.y;
     }
    else
     {
      GLF_live17z = GLF_live17a.y / GLF_live17a.x;
      {
       int GLF_live19m = _GLF_FUZZED(GLF_live0N);
       int GLF_live19_looplimiter4 = 0;
       int GLF_live19low = _GLF_FUZZED(GLF_live0N);
       int GLF_live19high = _GLF_FUZZED(6693);
       {
        if(GLF_live19_looplimiter4 >= 5)
         {
          1;
         }
        GLF_live19_looplimiter4 ++;
        {
         int GLF_live19_looplimiter3 = 0;
         for(int GLF_live19i = GLF_live19low; GLF_live19i < GLF_live19high; GLF_live19i += 2 * GLF_live19m)
          {
           if(GLF_live19_looplimiter3 >= 5)
            {
             break;
            }
           GLF_live19_looplimiter3 ++;
           int GLF_live19from = GLF_live19i;
           int GLF_live19mid = GLF_live19i + GLF_live19m - 1;
           int GLF_live19to = min(GLF_live19i + 2 * GLF_live19m - 1, GLF_live19high);
           GLF_live19merge(GLF_live19from, GLF_live19mid, GLF_live19to);
          }
        }
       }
      }
     }
   }
   int GLF_live1E = (GLF_live1icoord.x & 16) != 0 ? 0 : ~ 0;
   int GLF_live1F = (GLF_live1icoord.y & 1) != 0 ? 0 : ~ 0;
   {
    {
     int GLF_live10i = 0;
     vec2 GLF_live10uvstep = vec2(1.0) * (1.0 / 256.0);
     float GLF_live10slope = 2.0 / 256.0;
     vec2 GLF_live10coord = GLF_live10gl_FragCoord.xy * (1.0 / 256.0);
     float GLF_live10refh = texture(tex, GLF_live10coord).y;
     GLF_live10coord -= GLF_live10uvstep;
     GLF_live10refh += GLF_live10slope;
     float GLF_live10h = texture(tex, GLF_live10coord).y;
     {
      int GLF_live10_looplimiter0 = 0;
      while(GLF_live10h < GLF_live10refh && GLF_live10i < 32)
       {
        if(GLF_live10_looplimiter0 >= 5)
         {
          break;
         }
        GLF_live10_looplimiter0 ++;
        GLF_live10coord -= GLF_live10uvstep;
        GLF_live10refh += GLF_live10slope;
        GLF_live10h = texture(tex, GLF_live10coord).y;
        GLF_live10i ++;
       }
     }
     {
      int GLF_live18_looplimiter1 = 0;
      int GLF_live18i = _GLF_FUZZED(-8089);
      float GLF_live18A[50] = _GLF_FUZZED(float[50]((-79.71), -50.37, -9.3, (false ? 423.532 : 4.6), -2.6, 40.30, -9776.4753, -7398.2477, -1.3, 53.71, -6.4, 131.733, 43.69, -9007.3431, -365.717, 0.6, (-9.0 / 3.7), (6470.1863 - 5.5), -48.78, 445.451, -6.4, -365.717, -9007.3431, -7398.2477, -48.78, 0.6, (6470.1863 - 5.5), -2.6, -50.37, (-9.0 / 3.7), (false ? 423.532 : 4.6), 131.733, 445.451, -9.3, 53.71, -1.3, -9776.4753, 43.69, (-79.71), 40.30, -48.78, 43.69, 131.733, (false ? 423.532 : 4.6), -6.4, -50.37, -9776.4753, -2.6, -9.3, (-9.0 / 3.7)));
      uint GLF_live18uselessOutVariable = _GLF_FUZZED((59843u >> 147809u));
      do
       {
        if(GLF_live18_looplimiter1 >= 5)
         {
          break;
         }
        GLF_live18_looplimiter1 ++;
        if(GLF_live18i < int(GLF_live18gl_FragCoord.x))
         {
          break;
         }
        if(GLF_live18i > findMSB(0))
         {
          GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(GLF_live18i, 50)] += GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(int(usubBorrow(uint(GLF_live18i), 1u, GLF_live18uselessOutVariable)), 50)];
         }
        GLF_live18i ++;
       }
      while(GLF_live18i < bitfieldInsert(50, 0, 0, 0));
     }
     GLF_live10_GLF_color = vec4(vec3(float(GLF_live10i) * (1.0 / 32.0)), 1.0);
    }
   }
   {
    int GLF_live14i = _GLF_FUZZED(ivec4(42968, 43212, 18681, -84057).t);
    vec2 GLF_live14position = _GLF_FUZZED(vec2(7462.1125, 77.44));
    vec2 GLF_live14center = _GLF_FUZZED((vec3(121.712, -837.515, -3.2) * mat2x3(73.12, 4601.4212, -82.25, 2.5, 418.775, 306.344)));
    vec3 GLF_live14result = _GLF_FUZZED(vec3(-9.1, -82.54, 2.6));
    int GLF_live14_looplimiter0 = 0;
    {
     if(GLF_live14_looplimiter0 >= 3)
      {
       1;
      }
     GLF_live14_looplimiter0 ++;
     vec3 GLF_live14d = _GLF_FUZZED(atan(vec3(910.433, -375.174, -3.6)));
     GLF_live14d = GLF_live14drawShape(GLF_live14position, GLF_live14center + vec2(sin(float(GLF_live14i) / 10.0 + GLF_live14time) / 4.0, 0.0), vec3(0.01 + sin(float(GLF_live14i) / 100.0), 0.01, float(GLF_live14i)));
     if(length(GLF_live14d) <= 0.0)
      {
       1;
      }
     GLF_live14result = vec3(GLF_live14d);
    }
   }
   {
    {
     float GLF_live17th = _GLF_FUZZED(5.7);
     {
      GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](GLF_live0N, -26691, GLF_live0N, 91340, GLF_live0N, (-91052 * GLF_live0N), 70710, GLF_live0N, GLF_live0N, 42437)));
      int GLF_live20i = _GLF_FUZZED(GLF_live0N);
      if(GLF_live20i == 8)
       {
        GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 23;
       }
      else
       if(GLF_live20i == 9)
        {
         GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 29;
        }
     }
     vec2 GLF_live17v = _GLF_FUZZED(vec2(-6047.5918, -678.612));
     if(GLF_live17v.x < 0.0)
      {
       GLF_live17th = 1.0 - GLF_live17th;
      }
    }
    {
     {
      {
       int GLF_live16l = 0, GLF_live16h = 9;
       int GLF_live16stack[10] = _GLF_FUZZED(int[10](GLF_live16h, GLF_live16l, GLF_live16l, GLF_live16l, (uvec2(30018u, 90898u) , GLF_live16h), ivec2(-30762, -90982)[0], GLF_live16l, GLF_live16h, GLF_live16l, (GLF_live16h --)));
       int GLF_live16top = - 1;
       GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16l;
       GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16h;
       {
        int GLF_live16_looplimiter1 = 0;
        while(GLF_live16top >= 0)
         {
          if(GLF_live16_looplimiter1 >= 3)
           {
            break;
           }
          GLF_live16_looplimiter1 ++;
          GLF_live16h = GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(GLF_live16top --, 10)];
          GLF_live16l = GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(GLF_live16top --, 10)];
          int GLF_live16p = GLF_live16performPartition(GLF_live16l, GLF_live16h);
          if(GLF_live16p - 1 > GLF_live16l)
           {
            GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16l;
            GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16p - 1;
           }
          if(GLF_live16p + 1 < GLF_live16h)
           {
            {
             int GLF_live19m = _GLF_FUZZED(GLF_live0N);
             int GLF_live19low = _GLF_FUZZED(-23846);
             int GLF_live19high = _GLF_FUZZED((-64097 * int(118798u)));
             {
              int GLF_live19_looplimiter3 = 0;
              for(int GLF_live19i = GLF_live19low; GLF_live19i < GLF_live19high; GLF_live19i += 2 * GLF_live19m)
               {
                if(GLF_live19_looplimiter3 >= 5)
                 {
                  break;
                 }
                GLF_live19_looplimiter3 ++;
                int GLF_live19from = GLF_live19i;
                int GLF_live19mid = GLF_live19i + GLF_live19m - 1;
                int GLF_live19to = min(GLF_live19i + 2 * GLF_live19m - 1, GLF_live19high);
                GLF_live19merge(GLF_live19from, GLF_live19mid, GLF_live19to);
               }
             }
            }
            GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16p + 1;
            GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16h;
           }
         }
       }
      }
     }
     vec3(0.0, 0.0, 0.5);
     {
      bool GLF_live14c6 = _GLF_FUZZED((68.26 >= (+ -9.6)));
      vec3 GLF_live14setting = _GLF_FUZZED(vec3(-575.005, -92.05, 508.992));
      vec2 GLF_live14pos = _GLF_FUZZED((vec2(50.72, -62.16) + vec2(-20.90, -145.956)));
      if(! GLF_live14c6)
       {
        GLF_live14computeColor(GLF_live14setting.z / 40.0, GLF_live14pos);
       }
     }
    }
   }
   {
    vec2 GLF_live17v = _GLF_FUZZED(vec2(-4.7, 5.0));
    if(length(GLF_live17v) < 0.001)
     {
      {
       GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](GLF_live0N, (+ GLF_live0N), GLF_live0N, GLF_live0N, -48849, 44021, 14354, 16801, 6434, 44021)));
       int GLF_live20i = _GLF_FUZZED(-88890);
       if(GLF_live20i == 3)
        {
         GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 7;
        }
       else
        if(GLF_live20i == 4)
         {
          GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 11;
         }
        else
         if(GLF_live20i == 5)
          {
           GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 13;
          }
         else
          if(GLF_live20i == 6)
           {
            GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 17;
           }
          else
           if(GLF_live20i == 7)
            {
             GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 19;
            }
           else
            if(GLF_live20i == 8)
             {
              GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 23;
             }
            else
             if(GLF_live20i == 9)
              {
               GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 29;
              }
      }
      0.0;
     }
   }
   {
    {
     1;
    }
   }
   {
    float GLF_live9y = _GLF_FUZZED((399.968 - -682.351));
    float GLF_live9x = _GLF_FUZZED((vec2(3087.8480, 94.03).g - -2814.8775));
    int GLF_live9iteration = _GLF_FUZZED(GLF_live0N);
    float GLF_live9c_re = _GLF_FUZZED(-3.3);
    float GLF_live9c_im = _GLF_FUZZED(float(49599u));
    {
     int GLF_live9_looplimiter0 = 0;
     for(int GLF_live9k = 0; GLF_live9k < 1000; GLF_live9k ++)
      {
       if(GLF_live9_looplimiter0 >= 7)
        {
         break;
        }
       GLF_live9_looplimiter0 ++;
       {
        {
         int GLF_live21iters = _GLF_FUZZED((-34961 | GLF_live0N));
         int GLF_live21_looplimiter0 = 0;
         int GLF_live21v = _GLF_FUZZED((-91686 % -99439));
         int GLF_live21i = _GLF_FUZZED(GLF_live0N);
         for(         GLF_live21i = 0;
 GLF_live21i < GLF_live21iters; GLF_live21i ++)
          {
           if(GLF_live21_looplimiter0 >= 6)
            {
             break;
            }
           GLF_live21_looplimiter0 ++;
           GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
          }
        }
        bool GLF_live14c3 = _GLF_FUZZED((46223u < 149072u));
        if(! GLF_live14c3)
         {
          GLF_live14defaultColor();
         }
       }
       {
        {
         1;
         {
          {
           1;
          }
         }
        }
       }
       {
        float GLF_live17th = _GLF_FUZZED(-363.114);
        vec2 GLF_live17v = _GLF_FUZZED(vec2(-3.0, -2.0));
        if(GLF_live17v.y < 0.0)
         {
          GLF_live17th = - GLF_live17th;
         }
       }
       if(GLF_live9x * GLF_live9x + GLF_live9y * GLF_live9y > 4.0)
        {
         {
          int GLF_live16l = _GLF_FUZZED(ivec4(-78631, 99479, 85740, 33141).g);
          int GLF_live16stack[10] = _GLF_FUZZED(int[10](3796, GLF_live0N, GLF_live0N, GLF_live0N, -93292, -54001, -9541, 45475, GLF_live0N, 45475));
          int GLF_live16top = _GLF_FUZZED((~ (GLF_live0N - GLF_live0N)));
          int GLF_live16p = _GLF_FUZZED((-2198 % (26435 % GLF_live0N)));
          {
           GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16l;
           GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16p - 1;
           {
            int GLF_live21iters = _GLF_FUZZED((GLF_live0N - GLF_live0N));
            int GLF_live21_looplimiter0 = 0;
            int GLF_live21v = _GLF_FUZZED(56672);
            int GLF_live21i = _GLF_FUZZED(-37838);
            for(            GLF_live21i = 0;
 GLF_live21i < GLF_live21iters; GLF_live21i ++)
             {
              if(GLF_live21_looplimiter0 >= 6)
               {
                break;
               }
              GLF_live21_looplimiter0 ++;
              GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
             }
           }
          }
         }
         break;
        }
       float GLF_live9x_new = GLF_live9x * GLF_live9x - GLF_live9y * GLF_live9y + GLF_live9c_re;
       GLF_live9y = 2.0 * GLF_live9x * GLF_live9y + GLF_live9c_im;
       GLF_live9x = GLF_live9x_new;
       {
        int GLF_live21iters = _GLF_FUZZED(73447);
        int GLF_live21_looplimiter0 = 0;
        int GLF_live21v = _GLF_FUZZED(-48562);
        int GLF_live21i = _GLF_FUZZED((GLF_live0N % -50209));
        for(        GLF_live21i = 0;
 GLF_live21i < GLF_live21iters; GLF_live21i ++)
         {
          if(GLF_live21_looplimiter0 >= 6)
           {
            break;
           }
          GLF_live21_looplimiter0 ++;
          GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
         }
       }
       GLF_live9iteration ++;
       {
        int GLF_live15_looplimiter1 = 0;
        int GLF_live15i = _GLF_FUZZED((32988));
        vec3 GLF_live15c = _GLF_FUZZED(vec3(-4.6, -429.548, -3.2));
        {
         if(GLF_live15_looplimiter1 >= 4)
          {
           1;
          }
         GLF_live15_looplimiter1 ++;
         if(GLF_live15c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15i, 3)] >= 1.0)
          {
           {
            {
             1;
            }
           }
           GLF_live15c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15i, 3)] = GLF_live15c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15i, 3)] * GLF_live15c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15i, 3)];
          }
         {
          int GLF_live21_looplimiter0 = 0;
          int GLF_live21v = _GLF_FUZZED(-22676);
          {
           if(GLF_live21_looplimiter0 >= 6)
            {
             1;
            }
           GLF_live21_looplimiter0 ++;
           GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
          }
         }
        }
       }
      }
    }
   }
   int GLF_live1G = (GLF_live1icoord.y & 2) != 0 ? 0 : ~ 0;
   {
    int GLF_live6treeIndex = _GLF_FUZZED(GLF_live0N);
    int GLF_live6baseIndex = _GLF_FUZZED(GLF_live0N);
    int GLF_live6data = _GLF_FUZZED(GLF_live0N);
    {
     {
      float GLF_live10refh = _GLF_FUZZED(602.771);
      vec2 GLF_live10uvstep = _GLF_FUZZED(vec2(-6.5, -141.028));
      float GLF_live10slope = _GLF_FUZZED(6813.9050);
      float GLF_live10h = _GLF_FUZZED(32.57);
      int GLF_live10i = _GLF_FUZZED(-41737);
      vec2 GLF_live10coord = _GLF_FUZZED(vec2(-65.86, 9.1));
      {
       int GLF_live10_looplimiter0 = 0;
       while(GLF_live10h < GLF_live10refh && GLF_live10i < 32)
        {
         if(GLF_live10_looplimiter0 >= 5)
          {
           break;
           {
            {
             1;
            }
           }
          }
         GLF_live10_looplimiter0 ++;
         GLF_live10coord -= GLF_live10uvstep;
         GLF_live10refh += GLF_live10slope;
         GLF_live10h = texture(tex, GLF_live10coord).y;
         GLF_live10i ++;
        }
      }
     }
     if(GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].rightIndex == - 1)
      {
       GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].rightIndex = GLF_live6treeIndex;
       GLF_live6makeTreeNode(GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6treeIndex, 10)], GLF_live6data);
       1;
       {
        {
         1;
        }
       }
      }
     else
      {
       GLF_live6baseIndex = GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].rightIndex;
       1;
      }
    }
    {
     GLF_live13BST GLF_live13currentNode = _GLF_FUZZED(GLF_live13BST(16654, GLF_live0N, int(87876u)));
     int GLF_live13_looplimiter1 = 0;
     {
      int GLF_live15i = _GLF_FUZZED((GLF_live0N + 43035));
      vec3 GLF_live15c = _GLF_FUZZED(vec3(-890.860, -3127.9845, 0.7));
      {
       GLF_live15c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15i, 3)] = GLF_live15c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15i, 3)] * GLF_live15c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15i, 3)];
      }
     }
     int GLF_live13index = _GLF_FUZZED(GLF_live0N);
     int GLF_live13target = _GLF_FUZZED(-36494);
     {
      GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](GLF_live0N, -23759, 35723, 17679, GLF_live0N, GLF_live0N, 77201, -30314, 19182, GLF_live0N)));
      vec3 GLF_live20color = _GLF_FUZZED(vec3(7.6, 9.3, -3443.2168));
      if(GLF_live20binarySearch(GLF_live20obj, 1) == - 1)
       {
        1;
       }
      else
       {
        GLF_live20color.yz += GLF_live20color.yz;
       }
     }
     {
      if(GLF_live13_looplimiter1 >= 3)
       {
        1;
       }
      GLF_live13_looplimiter1 ++;
      GLF_live13currentNode = GLF_live13tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live13index, 10)];
      if(GLF_live13currentNode.data == GLF_live13target)
       {
        GLF_live13target;
       }
      GLF_live13index = GLF_live13target > GLF_live13currentNode.data ? GLF_live13currentNode.rightIndex : GLF_live13currentNode.leftIndex;
     }
    }
   }
   {
    float GLF_live10refh = _GLF_FUZZED(float(GLF_live0N));
    vec2 GLF_live10uvstep = _GLF_FUZZED(((mat4x2(-6.8, -5.0, -852.586, -1.0, -7.9, -3.3, 3039.6516, -44.97) * vec4(-333.673, 272.069, -3445.0678, -865.730)) * vec2(3448.4659, -953.535)));
    float GLF_live10slope = _GLF_FUZZED(6.9);
    float GLF_live10h = _GLF_FUZZED(-4.5);
    int GLF_live10_looplimiter0 = 0;
    int GLF_live10i = _GLF_FUZZED((82337 ^ GLF_live0N));
    {
     {
      1;
     }
    }
    vec2 GLF_live10coord = _GLF_FUZZED(vec2(-807.426, -8301.7595));
    while(GLF_live10h < GLF_live10refh && GLF_live10i < 32)
     {
      if(GLF_live10_looplimiter0 >= 5)
       {
        break;
       }
      GLF_live10_looplimiter0 ++;
      GLF_live10coord -= GLF_live10uvstep;
      GLF_live10refh += GLF_live10slope;
      GLF_live10h = texture(tex, GLF_live10coord).y;
      GLF_live10i ++;
     }
   }
   int GLF_live1H = (GLF_live1icoord.y & 4) != 0 ? 0 : ~ 0;
   int GLF_live1I = (GLF_live1icoord.y & 8) != 0 ? 0 : ~ 0;
   int GLF_live1J = (GLF_live1icoord.y & 16) != 0 ? 0 : ~ 0;
   {
    GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](-81936, -89133, GLF_live0N, GLF_live0N, GLF_live0N, GLF_live0N, GLF_live0N, (60726 >> GLF_live0N), 69273, (- 52830))));
    int GLF_live20i = _GLF_FUZZED((+ 97470));
    {
     GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 23;
    }
   }
   int GLF_live1res = (GLF_live1A | ~ GLF_live1C | ~ GLF_live1D | ~ GLF_live1E | GLF_live1F | GLF_live1G | GLF_live1H | ~ GLF_live1I | ~ GLF_live1J) & (GLF_live1B | ~ GLF_live1C | ~ GLF_live1D | ~ GLF_live1E | GLF_live1F | GLF_live1G | GLF_live1H | ~ GLF_live1I | ~ GLF_live1J) & (~ GLF_live1A | GLF_live1C | ~ GLF_live1D | ~ GLF_live1E | GLF_live1F | ~ GLF_live1H | GLF_live1I | ~ GLF_live1J) & (GLF_live1A | ~ GLF_live1B | ~ GLF_live1D | ~ GLF_live1E | GLF_live1G | ~ GLF_live1H | GLF_live1I | ~ GLF_live1J);
   GLF_live1res &= (GLF_live1A | GLF_live1B | ~ GLF_live1C | GLF_live1D | ~ GLF_live1E | GLF_live1F | GLF_live1G | ~ GLF_live1H | GLF_live1I | ~ GLF_live1J) & (GLF_live1B | ~ GLF_live1C | ~ GLF_live1D | ~ GLF_live1E | ~ GLF_live1F | ~ GLF_live1G | GLF_live1H | GLF_live1I | ~ GLF_live1J) & (GLF_live1A | GLF_live1C | ~ GLF_live1D | ~ GLF_live1E | ~ GLF_live1G | GLF_live1H | GLF_live1I | ~ GLF_live1J) & (GLF_live1A | GLF_live1C | ~ GLF_live1D | ~ GLF_live1E | ~ GLF_live1F | GLF_live1H | GLF_live1I | ~ GLF_live1J);
   GLF_live1res &= (GLF_live1A | GLF_live1B | ~ GLF_live1C | GLF_live1D | ~ GLF_live1E | ~ GLF_live1G | GLF_live1H | GLF_live1I | ~ GLF_live1J) & (~ GLF_live1A | GLF_live1C | GLF_live1D | ~ GLF_live1E | ~ GLF_live1G | GLF_live1H | GLF_live1I | ~ GLF_live1J) & (~ GLF_live1A | ~ GLF_live1B | ~ GLF_live1C | ~ GLF_live1D | GLF_live1E | ~ GLF_live1G | GLF_live1H | GLF_live1I | ~ GLF_live1J) & (GLF_live1A | ~ GLF_live1B | GLF_live1D | ~ GLF_live1E | GLF_live1G | GLF_live1H | GLF_live1I | ~ GLF_live1J);
   {
    {
     int GLF_live13result = _GLF_FUZZED(37421);
     int GLF_live13count = _GLF_FUZZED(ivec3(ivec4(-63324, -68710, -1914, 7026)).p);
     if(GLF_live13result == - 1)
      {
       GLF_live13count ++;
      }
    }
    vec3 GLF_live9data[16] = _GLF_FUZZED(vec3[16]((vec3(0.1, 6.5, 2965.8393) / vec3(4335.1198, -56.62, 62.84)), vec3(-263.963, 1826.3728, 3.2), vec3(9068.7902, -6377.0914, 707.468), vec3(vec4(-96.39, -9.4, 68.81, 0.5)), vec3(772.617, 4.6, -5.6), vec3(68.56, -8.1, 69.87), vec3(4.3, -476.267, -1595.7460), vec3(720.840, 4.7, 1512.4095), (-4689.3963 + vec3(59.46, 700.829, -6.5)), vec3(9.5, -9074.5659, 177.444), vec3(-81.58, -7.6, -3.3), vec3(-8071.0541, 5.4, 3.5), vec3(-337.968, 3.8, -1655.4128), (2.6 * vec3(-9.9, 290.828, -2371.6917)), vec3(-94.45, -401.079, -8371.2031), vec3(79.25, 8364.0744, -1.8)));
    {
     {
      int GLF_live10_looplimiter0 = 0;
      if(GLF_live10_looplimiter0 >= 5)
       {
        1;
       }
     }
     int GLF_live9_looplimiter2 = 0;
     for(int GLF_live9i = 0; GLF_live9i < 4; GLF_live9i ++)
      {
       if(GLF_live9_looplimiter2 >= 7)
        {
         break;
        }
       GLF_live9_looplimiter2 ++;
       {
        int GLF_live12i = _GLF_FUZZED(-87557);
        vec4 GLF_live12res = _GLF_FUZZED(vec4(9210.7974, -246.823, 1.0, -5159.0059));
        {
         GLF_live12res = GLF_live12pal[_GLF_MAKE_IN_BOUNDS_INT((int(GLF_live12picdata[_GLF_MAKE_IN_BOUNDS_INT(GLF_live12i, 8)].x) * int(GLF_live12picdata[_GLF_MAKE_IN_BOUNDS_INT(GLF_live12i, 8)].y) + GLF_live12i * 9 + 11) % 16, 16)];
        }
       }
       {
        int GLF_live9_looplimiter1 = 0;
        {
         vec2 GLF_live12pos = _GLF_FUZZED(vec2(6330.4459, 9.5));
         vec4 GLF_live12quad = _GLF_FUZZED(vec4(66.74, 3.7, -22.89, -968.971));
         {
          {
           int GLF_live19k = _GLF_FUZZED((GLF_live0N << 44713));
           int GLF_live19mid = _GLF_FUZZED(int(float(GLF_live0N)));
           int GLF_live19i = _GLF_FUZZED(89362);
           int GLF_live19_looplimiter1 = 0;
           while(GLF_live19i < GLF_live19N && GLF_live19i <= GLF_live19mid)
            {
             if(GLF_live19_looplimiter1 >= 5)
              {
               break;
              }
             GLF_live19_looplimiter1 ++;
             GLF_live19temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19k ++, 10)] = GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i ++, 10)];
            }
          }
          if(GLF_live12pos.x < GLF_live12quad.x)
           {
            false;
           }
          if(GLF_live12pos.y < GLF_live12quad.y)
           {
            false;
           }
          if(GLF_live12pos.x > GLF_live12quad.x + GLF_live12quad.z)
           {
            false;
           }
          if(GLF_live12pos.y > GLF_live12quad.y + GLF_live12quad.w)
           {
            false;
           }
          true;
         }
        }
        for(int GLF_live9j = 0; GLF_live9j < 4; GLF_live9j ++)
         {
          if(GLF_live9_looplimiter1 >= 7)
           {
            {
             float GLF_live17th = _GLF_FUZZED(-112.066);
             vec2 GLF_live17v = _GLF_FUZZED((vec2(-5459.8407, 6.7)));
             if(GLF_live17v.x < 0.0)
              {
               GLF_live17th = 1.0 - GLF_live17th;
              }
            }
            {
             {
              {
               1;
              }
             }
             int GLF_live13_looplimiter2 = 0;
             if(GLF_live13_looplimiter2 >= 3)
              {
               1;
              }
            }
            break;
           }
          {
           {
            vec2 GLF_live21pos = GLF_live21gl_FragCoord.xy / GLF_live21resolution;
            ivec2 GLF_live21lin = ivec2(int(GLF_live21pos.x * 10.0), int(GLF_live21pos.y * 10.0));
            int GLF_live21iters = GLF_live21lin.x + GLF_live21lin.y * 10;
            int GLF_live21v = 100;
            int GLF_live21i = _GLF_FUZZED(-36450);
            {
             int GLF_live21_looplimiter0 = 0;
             for(             GLF_live21i = 0;
 GLF_live21i < GLF_live21iters; GLF_live21i ++)
              {
               if(GLF_live21_looplimiter0 >= 6)
                {
                 break;
                }
               GLF_live21_looplimiter0 ++;
               GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
              }
            }
            GLF_live21_GLF_color = GLF_live21pal[_GLF_MAKE_IN_BOUNDS_INT(GLF_live21v % 16, 16)];
           }
          }
          GLF_live9_looplimiter1 ++;
          {
           int GLF_live16_looplimiter3 = 0;
           vec3 GLF_live16color = _GLF_FUZZED(vec3(2.9, -7851.5312, 2798.8717));
           {
            GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](GLF_live0N, GLF_live0N, -59824, GLF_live0N, 8550, (+ -1518), 69422, ivec2(-3354, 25909).y, GLF_live0N, 22165)));
            int GLF_live20i = _GLF_FUZZED(GLF_live0N);
            if(GLF_live20i == 0)
             {
              GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 2;
             }
            else
             if(GLF_live20i == 1)
              {
               GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 3;
              }
             else
              if(GLF_live20i == 2)
               {
                GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 5;
               }
              else
               if(GLF_live20i == 3)
                {
                 GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 7;
                }
               else
                if(GLF_live20i == 4)
                 {
                  GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 11;
                 }
                else
                 if(GLF_live20i == 5)
                  {
                   GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 13;
                  }
                 else
                  if(GLF_live20i == 6)
                   {
                    GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 17;
                   }
                  else
                   if(GLF_live20i == 7)
                    {
                     GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 19;
                    }
                   else
                    if(GLF_live20i == 8)
                     {
                      GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 23;
                     }
                    else
                     if(GLF_live20i == 9)
                      {
                       GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 29;
                      }
           }
           int GLF_live16count = _GLF_FUZZED((int(21.16) * GLF_live0N));
           do
            {
             if(GLF_live16_looplimiter3 >= 3)
              {
               break;
              }
             GLF_live16_looplimiter3 ++;
             GLF_live16color += GLF_live16palette(vec3(0.5, float(GLF_live16obj.numbers[8]) * 0.1, 0.2), vec3(0.5), trunc(vec3(GLF_live16injectionSwitch.y)), vec3(float(GLF_live16obj.numbers[4]) * 0.1, GLF_live16injectionSwitch.x, 0.6));
             GLF_live16count ++;
            }
           while(GLF_live16count != GLF_live16obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(int(GLF_live16injectionSwitch.x), 10)]);
          }
          GLF_live9data[_GLF_MAKE_IN_BOUNDS_INT(4 * GLF_live9j + GLF_live9i, 16)] = GLF_live9mand(GLF_live9gl_FragCoord.x + float(GLF_live9i - 1), GLF_live9gl_FragCoord.y + float(GLF_live9j - 1));
         }
       }
      }
    }
   }
   GLF_live1res &= (~ GLF_live1A | GLF_live1B | ~ GLF_live1C | GLF_live1D | ~ GLF_live1E | GLF_live1G | GLF_live1H | GLF_live1I | ~ GLF_live1J) & (GLF_live1A | ~ GLF_live1B | ~ GLF_live1D | GLF_live1E | GLF_live1G | GLF_live1H | GLF_live1I | ~ GLF_live1J) & (GLF_live1A | ~ GLF_live1C | ~ GLF_live1D | GLF_live1E | GLF_live1F | GLF_live1G | GLF_live1H | GLF_live1I | ~ GLF_live1J) & (~ GLF_live1A | GLF_live1C | ~ GLF_live1D | GLF_live1E | GLF_live1F | GLF_live1G | GLF_live1H | GLF_live1I | ~ GLF_live1J);
   GLF_live1res &= (~ GLF_live1A | ~ GLF_live1B | GLF_live1C | ~ GLF_live1D | ~ GLF_live1E | ~ GLF_live1F | ~ GLF_live1G | ~ GLF_live1H | ~ GLF_live1I | GLF_live1J) & (GLF_live1A | ~ GLF_live1B | GLF_live1C | GLF_live1D | ~ GLF_live1E | ~ GLF_live1F | ~ GLF_live1G | ~ GLF_live1H | ~ GLF_live1I | GLF_live1J) & (~ GLF_live1A | GLF_live1B | GLF_live1C | GLF_live1D | ~ GLF_live1E | ~ GLF_live1G | ~ GLF_live1H | ~ GLF_live1I | GLF_live1J);
   GLF_live1res &= (~ GLF_live1C | ~ GLF_live1D | GLF_live1E | ~ GLF_live1F | ~ GLF_live1G | ~ GLF_live1H | ~ GLF_live1I | GLF_live1J) & (~ GLF_live1A | ~ GLF_live1C | ~ GLF_live1D | GLF_live1E | ~ GLF_live1G | ~ GLF_live1H | ~ GLF_live1I | GLF_live1J) & (GLF_live1B | ~ GLF_live1D | GLF_live1E | ~ GLF_live1F | ~ GLF_live1H | ~ GLF_live1I | GLF_live1J);
   GLF_live1res &= (GLF_live1A | GLF_live1B | GLF_live1C | ~ GLF_live1D | GLF_live1E | ~ GLF_live1G | ~ GLF_live1H | ~ GLF_live1I | GLF_live1J) & (GLF_live1B | GLF_live1C | GLF_live1D | ~ GLF_live1E | GLF_live1F | ~ GLF_live1G | ~ GLF_live1H | ~ GLF_live1I | GLF_live1J);
   GLF_live1res &= (GLF_live1A | ~ GLF_live1C | GLF_live1D | GLF_live1E | GLF_live1F | ~ GLF_live1G | ~ GLF_live1H | ~ GLF_live1I | GLF_live1J) & (GLF_live1B | ~ GLF_live1C | GLF_live1D | GLF_live1E | GLF_live1F | ~ GLF_live1G | ~ GLF_live1H | GLF_live1J);
   GLF_live1res &= (~ GLF_live1A | ~ GLF_live1B | GLF_live1C | GLF_live1D | GLF_live1E | GLF_live1F | ~ GLF_live1G | ~ GLF_live1H | ~ GLF_live1I | GLF_live1J);
   {
    vec3 GLF_live8col = _GLF_FUZZED((-256.979 - vec3(-7058.5505, -254.682, 427.406)));
    {
     int GLF_live13_looplimiter0 = 0;
     if(GLF_live13_looplimiter0 >= 3)
      {
       1;
      }
    }
    float GLF_live8A[50] = _GLF_FUZZED(float[50](-4.2, (746.983 + 9.0), -372.605, -5092.0966, 0.7, (-52.22), (9.9 - -568.445), -3977.4281, 23.04, 769.058, 9.0, -4.2, -63.21, -1.2, 2.2, -1.2, 7.8, 3917.4281, 191.273, 2.7, 0.7, 191.273, -63.21, -372.605, -1.2, -3977.4281, -4.2, -1.2, 769.058, 9.0, 7.8, -5092.0966, 3917.4281, (746.983 + 9.0), 2.2, (-52.22), -4.2, 2.7, (9.9 - -568.445), 23.04, 23.04, 7.8, -5092.0966, -4.2, 9.0, -4.2, -3977.4281, -1.2, 769.058, -63.21));
    vec2 GLF_live8c = _GLF_FUZZED(((mat4x2(6.9, 8024.6823, -369.639, -63.10, -1.3, -81.59, -2.5, 115.825) / 59.16) * vec4(-9010.2175, -709.523, -588.009, -8.0)));
    if(int(GLF_live8gl_FragCoord.y) < 60)
     {
      GLF_live8col = .5 + cos(GLF_live8c.y + vec3(GLF_live8resolution.x, GLF_live8A[14] / GLF_live8resolution.x + 50.0, 22.0));
     }
    else
     if(int(GLF_live8gl_FragCoord.y) < 80)
      {
       GLF_live8col = .5 + cos(GLF_live8c.y + vec3(GLF_live8resolution.x, GLF_live8A[39] / GLF_live8resolution.x + 50.0, 22.0));
      }
     else
      if(int(GLF_live8gl_FragCoord.y) < 100)
       {
        {
         int GLF_live15_looplimiter1 = 0;
         vec3 GLF_live15c = _GLF_FUZZED(vec3(450.858, -0.1, -286.143));
         for(int GLF_live15i = 0; GLF_live15i < 3; GLF_live15i ++)
          {
           if(GLF_live15_looplimiter1 >= 4)
            {
             break;
             {
              int GLF_live20_looplimiter4 = 0;
              int GLF_live20r = _GLF_FUZZED(int(560u));
              GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](-2893, -42757, GLF_live0N, GLF_live0N, GLF_live0N, GLF_live0N, GLF_live0N, GLF_live0N, -13395, -5075)));
              int GLF_live20l = _GLF_FUZZED((-5294 / ((-43487) + (~ 82653))));
              int GLF_live20x = _GLF_FUZZED((- GLF_live0N));
              while(GLF_live20l <= GLF_live20r)
               {
                if(GLF_live20_looplimiter4 >= 7)
                 {
                  break;
                 }
                GLF_live20_looplimiter4 ++;
                int GLF_live20m = (GLF_live20l + GLF_live20r) / 2;
                if(GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20m, 10)] == GLF_live20x)
                 {
                  GLF_live20m;
                 }
                if(GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20m, 10)] < GLF_live20x)
                 {
                  GLF_live20l = GLF_live20m + 1;
                 }
                else
                 {
                  GLF_live20r = GLF_live20m - 1;
                 }
               }
             }
            }
           GLF_live15_looplimiter1 ++;
           if(GLF_live15c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15i, 3)] >= 1.0)
            {
             GLF_live15c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15i, 3)] = GLF_live15c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15i, 3)] * GLF_live15c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15i, 3)];
            }
          }
        }
        {
         int GLF_live20r = _GLF_FUZZED(-29886);
         int GLF_live20m = _GLF_FUZZED(-79910);
         {
          GLF_live20r = GLF_live20m - 1;
         }
        }
        GLF_live8col = .5 + cos(GLF_live8c.y + vec3(GLF_live8resolution.x, GLF_live8A[39] / GLF_live8resolution.x + 50.0, 22.0));
        {
         vec3 GLF_live19vecCoor = _GLF_FUZZED(vec3(7439.8858, 5.6, 76.51));
         vec2 GLF_live19color = _GLF_FUZZED(vec2(75.41, -98.75));
         int GLF_live19i = _GLF_FUZZED(-81526);
         if(int(GLF_live19gl_FragCoord[1]) < 210)
          {
           GLF_live19color = fract(sin(GLF_live19vecCoor.yx - trunc(float(GLF_live19data[5]))));
           GLF_live19color.y -= tanh(GLF_live19color.x) / cosh(GLF_live19color.y);
           1;
          }
         else
          if(int(GLF_live19gl_FragCoord[1]) < 240)
           {
            GLF_live19color = fract(asinh(GLF_live19vecCoor.yx - trunc(float(GLF_live19data[6]))));
            GLF_live19color.y -= isnan(float(GLF_live19i)) ? tanh(GLF_live19gl_FragCoord.x) : atanh(GLF_live19gl_FragCoord.y);
            1;
           }
          else
           if(int(GLF_live19gl_FragCoord[1]) < 270)
            {
             GLF_live19color = fract(sin(GLF_live19vecCoor.yx - trunc(float(GLF_live19data[7]))));
             GLF_live19color.y *= mix(normalize(GLF_live19vecCoor), normalize(vec3(GLF_live19color, degrees(GLF_live19color.x))), GLF_live19injectionSwitch.x).y;
             1;
            }
           else
            {
             1;
            }
        }
       }
      else
       {
        {
         int GLF_live11i = _GLF_FUZZED(94587);
         uint GLF_live11uselessOutVariable = _GLF_FUZZED(153560u);
         int GLF_live11j = _GLF_FUZZED((- (39375 >> 93798)));
         if(uint(GLF_live11j) < uaddCarry(uint(GLF_live11i), 1u, GLF_live11uselessOutVariable))
          {
           1;
          }
        }
        if(int(GLF_live8gl_FragCoord.y) < 120)
         {
          GLF_live8col = .5 + cos(GLF_live8c.y + vec3(GLF_live8resolution.x, GLF_live8A[39] / GLF_live8resolution.x + 50.0, 22.0));
         }
        else
         if(int(GLF_live8gl_FragCoord.y) < 140)
          {
           GLF_live8col = .5 + cos(GLF_live8c.y + vec3(GLF_live8resolution.x, GLF_live8A[39] / GLF_live8resolution.x + 50.0, 22.0));
          }
         else
          if(int(GLF_live8gl_FragCoord.y) < 160)
           {
            GLF_live8col = .5 + cos(GLF_live8c.y + vec3(GLF_live8resolution.x, GLF_live8A[39] / GLF_live8resolution.x + 50.0, 22.0));
           }
          else
           if(int(GLF_live8gl_FragCoord.y) < 180)
            {
             GLF_live8col = .5 + cos(GLF_live8c.y + vec3(GLF_live8resolution.x, GLF_live8A[44] / GLF_live8resolution.x + 50.0, 22.0));
             {
              vec3 GLF_live19vecCoor = _GLF_FUZZED(vec3(-522.912, 2.6, 61.79));
              vec2 GLF_live19color = _GLF_FUZZED((+ vec2(-283.166, 843.237)));
              {
               GLF_live19color = fract(sin(GLF_live19vecCoor.yx - trunc(float(GLF_live19data[2]))));
               GLF_live19color.x += atanh(GLF_live19color.x) * cosh(GLF_live19injectionSwitch.y) * smoothstep(GLF_live19color, GLF_live19injectionSwitch, GLF_live19gl_FragCoord.yy).x;
               1;
              }
             }
            }
           else
            if(int(GLF_live8gl_FragCoord.y) < 200)
             {
              GLF_live8col = .5 + cos(GLF_live8c.y + vec3(GLF_live8resolution.x, GLF_live8A[49] / GLF_live8resolution.x + 50.0, 22.0));
             }
            else
             {
              1;
              {
               int GLF_live21iters = _GLF_FUZZED((- int((108443u % 123865u))));
               int GLF_live21_looplimiter0 = 0;
               int GLF_live21v = _GLF_FUZZED(GLF_live0N);
               int GLF_live21i = _GLF_FUZZED((-61830 + GLF_live0N));
               for(               GLF_live21i = 0;
 GLF_live21i < GLF_live21iters; GLF_live21i ++)
                {
                 if(GLF_live21_looplimiter0 >= 6)
                  {
                   break;
                  }
                 GLF_live21_looplimiter0 ++;
                 GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
                }
              }
              {
               int GLF_live11msb10 = _GLF_FUZZED(GLF_live0N);
               float GLF_live11data[10] = _GLF_FUZZED(float[10](6746.7272, 442.787, 4075.9298, -3.0, vec3(-71.34, -367.009, 75.37).z, (vec4(76.13, -2.4, 98.39, 82.63) / -609.263).t, (-4823.3968 + 36.26), 9.2, ((85.35 + -8952.7189) / 7.9), (-4823.3968 + 36.26)));
               int GLF_live11i = _GLF_FUZZED(GLF_live0N);
               uint GLF_live11uselessOutVariable = _GLF_FUZZED(26286u);
               int GLF_live11_looplimiter2 = 0;
               {
                {
                 {
                  GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](-26106, 12797, -89805, GLF_live0N, GLF_live0N, GLF_live0N, -49597, -48852, (76801 - 15504), 12797)));
                  int GLF_live20i = _GLF_FUZZED(-15247);
                  if(GLF_live20i == 4)
                   {
                    GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 11;
                   }
                  else
                   if(GLF_live20i == 5)
                    {
                     GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 13;
                    }
                   else
                    if(GLF_live20i == 6)
                     {
                      GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 17;
                     }
                    else
                     if(GLF_live20i == 7)
                      {
                       GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 19;
                      }
                     else
                      if(GLF_live20i == 8)
                       {
                        GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 23;
                       }
                      else
                       if(GLF_live20i == 9)
                        {
                         GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 29;
                        }
                 }
                 vec2 GLF_live14position = _GLF_FUZZED(vec2(192.862, -30.20));
                 if(abs(GLF_live14position.y - GLF_live14position.x) < 0.5)
                  {
                   GLF_live14b_b = clamp(0.0, 1.0, GLF_live14b_b * 3.0);
                  }
                }
                if(GLF_live11_looplimiter2 >= 3)
                 {
                  1;
                 }
                GLF_live11_looplimiter2 ++;
                {
                 int GLF_live11_looplimiter1 = 0;
                 for(int GLF_live11j = bitfieldExtract(int(GLF_live11injectionSwitch.x), 0, 0); GLF_live11j < findLSB(GLF_live11msb10); GLF_live11j ++)
                  {
                   if(GLF_live11_looplimiter1 >= 3)
                    {
                     break;
                    }
                   GLF_live11_looplimiter1 ++;
                   {
                    vec2 GLF_live14position = _GLF_FUZZED(vec2(vec4(-46.04, 5.4, -153.376, 30.44).qt.s));
                    vec2 GLF_live14center = _GLF_FUZZED(vec2(3.7, -4.4));
                    vec3 GLF_live14result = _GLF_FUZZED(vec3(584.203, 460.622, 910.444));
                    int GLF_live14_looplimiter0 = 0;
                    for(int GLF_live14i = 35; GLF_live14i >= 0; GLF_live14i --)
                     {
                      if(GLF_live14_looplimiter0 >= 3)
                       {
                        break;
                       }
                      GLF_live14_looplimiter0 ++;
                      vec3 GLF_live14d = _GLF_FUZZED(atan(vec3(910.433, -375.174, -3.6)));
                      GLF_live14d = GLF_live14drawShape(GLF_live14position, GLF_live14center + vec2(sin(float(GLF_live14i) / 10.0 + GLF_live14time) / 4.0, 0.0), vec3(0.01 + sin(float(GLF_live14i) / 100.0), 0.01, float(GLF_live14i)));
                      if(length(GLF_live14d) <= 0.0)
                       {
                        continue;
                        {
                         {
                          1;
                         }
                        }
                       }
                      GLF_live14result = vec3(GLF_live14d);
                     }
                   }
                   if(uint(GLF_live11j) < uaddCarry(uint(GLF_live11i), 1u, GLF_live11uselessOutVariable))
                    {
                     {
                      GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](-70276, -25433, GLF_live0N, 97472, -75940, -67239, GLF_live0N, -16974, GLF_live0N, -70276)));
                      vec3 GLF_live20color = _GLF_FUZZED(vec3(3.8, 2434.9995, 827.428));
                      if(GLF_live20gl_FragCoord.y < GLF_live20resolution.y / 1.1)
                       {
                        if(GLF_live20binarySearch(GLF_live20obj, GLF_live20obj.prime_numbers[4]) != - (int(GLF_live20resolution.y)) && GLF_live20binarySearch(GLF_live20obj, GLF_live20obj.prime_numbers[0]) >= - (int(GLF_live20resolution.x)))
                         {
                          GLF_live20color.yz -= dot(float(GLF_live20binarySearch(GLF_live20obj, GLF_live20obj.prime_numbers[4])), float(GLF_live20binarySearch(GLF_live20obj, GLF_live20obj.prime_numbers[0])));
                         }
                        else
                         {
                          1;
                         }
                       }
                      else
                       {
                        if(GLF_live20binarySearch(GLF_live20obj, 1) == - 1)
                         {
                          1;
                         }
                        else
                         {
                          GLF_live20color.yz += GLF_live20color.yz;
                         }
                       }
                     }
                     {
                      float GLF_live15limit = _GLF_FUZZED(-64.23);
                      float GLF_live15thirty_two = _GLF_FUZZED(-5.9);
                      {
                       float GLF_live15result = - 0.5;
                       {
                        {
                         {
                          int GLF_live19_looplimiter6 = 0;
                          for(int GLF_live19j = 0; GLF_live19j < 10; GLF_live19j ++)
                           {
                            if(GLF_live19_looplimiter6 >= 5)
                             {
                              break;
                             }
                            GLF_live19_looplimiter6 ++;
                            GLF_live19temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19j, 10)] = GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19j, 10)];
                           }
                         }
                        }
                        int GLF_live15_looplimiter0 = 0;
                        for(int GLF_live15i = 1; GLF_live15i < 800; GLF_live15i ++)
                         {
                          if(GLF_live15_looplimiter0 >= 4)
                           {
                            break;
                           }
                          GLF_live15_looplimiter0 ++;
                          if((GLF_live15i % 32) == 0)
                           {
                            GLF_live15result += 0.4;
                           }
                          else
                           {
                            if(mod(float(GLF_live15i), round(GLF_live15thirty_two)) <= 0.01)
                             {
                              GLF_live15result += 100.0;
                              {
                               int GLF_live21iters = _GLF_FUZZED(int(float(false)));
                               int GLF_live21v = _GLF_FUZZED(-29258);
                               int GLF_live21i = _GLF_FUZZED((GLF_live0N >> (GLF_live0N >> GLF_live0N)));
                               {
                                int GLF_live21_looplimiter0 = 0;
                                for(                                GLF_live21i = 0;
 GLF_live21i < GLF_live21iters; GLF_live21i ++)
                                 {
                                  if(GLF_live21_looplimiter0 >= 6)
                                   {
                                    break;
                                   }
                                  GLF_live21_looplimiter0 ++;
                                  GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
                                 }
                               }
                              }
                             }
                            {
                             {
                              int GLF_live18msb9 = 512;
                              int GLF_live18msb10 = 1024;
                              int GLF_live18msb14 = 16384;
                              int GLF_live18msb15 = 32768;
                              int GLF_live18msb19 = 524288;
                              int GLF_live18msb20 = 1048576;
                              int GLF_live18msb24 = 16777216;
                              int GLF_live18msb25 = 33554432;
                              int GLF_live18msb29 = 536870912;
                              int GLF_live18msb30 = 1073741824;
                              uint GLF_live18uselessOutVariable = _GLF_FUZZED(36826u);
                              float GLF_live18A[50] = _GLF_FUZZED(float[50](-7.6, sign(-7830.4791), 9907.6905, -814.860, tanh(71.60), 3781.1692, tanh(55.80), -3781.0758, 4631.3142, determinant(mat3(916.560, -4260.2428, 3898.4729, 879.869, 37.61, 629.078, 8640.0350, 5.8, -14.18)), -4.7, 7.5, 1351.0728, 88.91, -1.9, sinh(6518.2686), 5.8, dFdx(30.73), -5049.4156, 5.8, sinh(6518.2686), tanh(71.60), 4631.3142, -3781.0758, -5049.4156, -1.9, 7.5, -4.7, determinant(mat3(916.560, -4260.2428, 3898.4729, 879.869, 37.61, 629.078, 8640.0350, 5.8, -14.18)), -814.860, sign(-7830.4791), -7.6, 1351.0728, tanh(55.80), 9907.6905, dFdx(30.73), 88.91, 3781.1692, 4631.3142, -5049.4156, 88.91, -814.860, tanh(55.80), 9907.6905, 3781.1692, sinh(6518.2686), -4.7, -7.6, -1.9, sign(-7830.4791)));
                              int GLF_live18i = bitfieldExtract(0, 0, 0);
                              {
                               int GLF_live18_looplimiter0 = 0;
                               do
                                {
                                 if(GLF_live18_looplimiter0 >= 5)
                                  {
                                   break;
                                  }
                                 GLF_live18_looplimiter0 ++;
                                 if(GLF_live18i >= int(GLF_live18resolution.x))
                                  {
                                   break;
                                  }
                                 if(findLSB(16) * (GLF_live18i / findMSB(16)) == GLF_live18i)
                                  {
                                   GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(GLF_live18i / findLSB(16), 50)] = float(GLF_live18i);
                                  }
                                 GLF_live18i ++;
                                }
                               while(GLF_live18i < bitfieldInsert(200, 0, 0, 0));
                              }
                              GLF_live18i = findLSB(0);
                              {
                               int GLF_live18_looplimiter1 = 0;
                               do
                                {
                                 if(GLF_live18_looplimiter1 >= 5)
                                  {
                                   break;
                                  }
                                 GLF_live18_looplimiter1 ++;
                                 if(GLF_live18i < int(GLF_live18gl_FragCoord.x))
                                  {
                                   break;
                                  }
                                 if(GLF_live18i > findMSB(0))
                                  {
                                   GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(GLF_live18i, 50)] += GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(int(usubBorrow(uint(GLF_live18i), 1u, GLF_live18uselessOutVariable)), 50)];
                                  }
                                 GLF_live18i ++;
                                }
                               while(GLF_live18i < bitfieldInsert(50, 0, 0, 0));
                              }
                              if(int(GLF_live18gl_FragCoord.x) < findLSB(GLF_live18msb20))
                               {
                                GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldReverse(0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(16), 50)] / GLF_live18resolution.y, 1.0, 1.0);
                               }
                              else
                               if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(40, 0, 0, 0))
                                {
                                 GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(32), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb9), 50)] / GLF_live18resolution.y, 1.0, 1.0);
                                }
                               else
                                if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(60, 0, 0, 0))
                                 {
                                  GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb10), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(GLF_live18msb14), 50)] / GLF_live18resolution.y, 1.0, 1.0);
                                 }
                                else
                                 if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(80, 0, 0, 0))
                                  {
                                   GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(GLF_live18msb15), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb19), 50)] / GLF_live18resolution.y, 1.0, 1.0);
                                  }
                                 else
                                  if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(100, 0, 0, 0))
                                   {
                                    GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb20), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(GLF_live18msb24), 50)] / GLF_live18resolution.y, 1.0, 1.0);
                                   }
                                  else
                                   if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(120, 0, 0, 0))
                                    {
                                     GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(GLF_live18msb25), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb29), 50)] / GLF_live18resolution.y, 1.0, 1.0);
                                    }
                                   else
                                    if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(140, 0, 0, 0))
                                     {
                                      GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb30), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(34, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
                                     }
                                    else
                                     if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(160, 0, 0, 0))
                                      {
                                       GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(35, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(39, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
                                      }
                                     else
                                      if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(180, 0, 0, 0))
                                       {
                                        GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(40, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(44, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
                                       }
                                      else
                                       if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(180, 0, 0, 0))
                                        {
                                         GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(45, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(49, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
                                        }
                                       else
                                        {
                                         1;
                                        }
                             }
                            }
                           }
                          if(float(GLF_live15i) >= GLF_live15limit)
                           {
                            GLF_live15result;
                           }
                         }
                       }
                       GLF_live15result;
                      }
                     }
                     continue;
                    }
                   bool GLF_live11doSwap = GLF_live11checkSwap(GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11i, 10)], GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11j, 10)]);
                   if(GLF_live11doSwap)
                    {
                     float GLF_live11temp = GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11i, 10)];
                     GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11i, 10)] = GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11j, 10)];
                     {
                      int GLF_live21_looplimiter0 = 0;
                      if(GLF_live21_looplimiter0 >= 6)
                       {
                        1;
                       }
                     }
                     GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11j, 10)] = GLF_live11temp;
                    }
                  }
                 {
                  {
                   vec2 GLF_live21pos = GLF_live21gl_FragCoord.xy / GLF_live21resolution;
                   ivec2 GLF_live21lin = ivec2(int(GLF_live21pos.x * 10.0), int(GLF_live21pos.y * 10.0));
                   int GLF_live21iters = GLF_live21lin.x + GLF_live21lin.y * 10;
                   int GLF_live21v = 100;
                   int GLF_live21i = _GLF_FUZZED(-36450);
                   {
                    int GLF_live21_looplimiter0 = 0;
                    for(                    GLF_live21i = 0;
 GLF_live21i < GLF_live21iters; GLF_live21i ++)
                     {
                      if(GLF_live21_looplimiter0 >= 6)
                       {
                        break;
                       }
                      GLF_live21_looplimiter0 ++;
                      GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
                     }
                   }
                   GLF_live21_GLF_color = GLF_live21pal[_GLF_MAKE_IN_BOUNDS_INT(GLF_live21v % 16, 16)];
                  }
                 }
                }
                GLF_live11i ++;
               }
              }
              {
               int GLF_live21iters = _GLF_FUZZED(ivec3(57869, 93502, -95684).p);
               int GLF_live21_looplimiter0 = 0;
               int GLF_live21v = _GLF_FUZZED((-83242 >> GLF_live0N));
               int GLF_live21i = _GLF_FUZZED(-54615);
               for(               GLF_live21i = 0;
 GLF_live21i < GLF_live21iters; GLF_live21i ++)
                {
                 if(GLF_live21_looplimiter0 >= 6)
                  {
                   break;
                  }
                 GLF_live21_looplimiter0 ++;
                 GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
                }
              }
             }
       }
    {
     vec3 GLF_live14setting = _GLF_FUZZED(vec3(585.685, -4.2, -734.059));
     vec2 GLF_live14pos = _GLF_FUZZED(vec2(-2.2, 0.7));
     {
      GLF_live14computeColor(GLF_live14setting.z / 40.0, GLF_live14pos);
     }
    }
   }
   {
    {
     GLF_live3_GLF_color = vec4(1.0, 1.0, 1.0, 1.0);
     {
      int GLF_live11i = _GLF_FUZZED(ivec3(93598, 37629, -60034).r);
      uint GLF_live11uselessOutVariable = _GLF_FUZZED(22970u);
      {
       bool GLF_live14c4 = _GLF_FUZZED(true);
       if(! GLF_live14c4)
        {
         GLF_live14defaultColor();
        }
      }
      int GLF_live11j = _GLF_FUZZED(GLF_live0N);
      if(uint(GLF_live11j) < uaddCarry(uint(GLF_live11i), 1u, GLF_live11uselessOutVariable))
       {
        1;
       }
     }
     {
      {
       int GLF_live21iters = _GLF_FUZZED(53176);
       int GLF_live21_looplimiter0 = 0;
       int GLF_live21v = _GLF_FUZZED(-91130);
       int GLF_live21i = _GLF_FUZZED(GLF_live0N);
       for(       GLF_live21i = 0;
 GLF_live21i < GLF_live21iters; GLF_live21i ++)
        {
         if(GLF_live21_looplimiter0 >= 6)
          {
           break;
          }
         GLF_live21_looplimiter0 ++;
         GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
        }
      }
      {
       {
        1;
       }
      }
      float GLF_live7th = _GLF_FUZZED(-221.807);
      {
       {
        1;
       }
      }
      {
       GLF_live7th = - GLF_live7th;
      }
     }
     1;
    }
   }
   GLF_live1res &= (GLF_live1A | GLF_live1B | ~ GLF_live1C | ~ GLF_live1D | GLF_live1E | GLF_live1G | ~ GLF_live1H | ~ GLF_live1I | GLF_live1J);
   GLF_live1res &= (~ GLF_live1B | GLF_live1D | GLF_live1E | ~ GLF_live1F | GLF_live1G | ~ GLF_live1H | ~ GLF_live1I | GLF_live1J);
   GLF_live1res &= (~ GLF_live1B | GLF_live1C | ~ GLF_live1D | GLF_live1E | GLF_live1F | GLF_live1G | ~ GLF_live1H | ~ GLF_live1I | GLF_live1J);
   {
    vec3 GLF_live9data[16] = _GLF_FUZZED(vec3[16](vec3(2094.2799, 6598.1475, 77.00), vec3(3.0, -0.2, -5.5), ((vec3(707.523, -3015.6525, -3629.8331) * mat3(-66.60, -328.391, -3610.6639, -7.7, -2.6, 21.56, -75.84, -1496.9050, 83.99)) / -44.64), vec3(-9.7, 9.9, -7876.0128), vec3(47.29, 3.5, -0.8), vec3(-9196.8905, -402.568, -26.97), vec3(9216.1337, -2.3, 66.69), vec4(-99.88, -87.40, -81.80, -4039.0490).gaa, vec3(635.139, -1.8, -58.75), vec3(-9746.6120, -7731.1203, 95.26), vec3(9.5, 76.76, -0.4), vec3(67.93, 0.8, 0.2), vec3(688.434, -77.06, -591.655), vec3(-0.4, -3.9, 6652.2714), vec3(-59.23, 2.1, 89.10), vec3(461.902, -2.7, 5957.8136)));
    {
     int GLF_live9_looplimiter2 = 0;
     for(int GLF_live9i = 0; GLF_live9i < 4; GLF_live9i ++)
      {
       {
        int GLF_live18i = _GLF_FUZZED(GLF_live0N);
        float GLF_live18A[50] = _GLF_FUZZED(float[50]((215.274 + 879.141), (-601.349 * -94.19), 844.429, -70.95, 42.11, 3.1, vec2(8.6, -52.99).g, 7.1, -8535.1626, 4.3, -865.227, -0.8, 226.703, 4.1, -8415.7950, 6956.3310, -4.6, -5615.1171, 71.22, -8535.1626, -70.95, 226.703, 42.11, 71.22, -865.227, 4.1, -8415.7950, 3.1, -5615.1171, 7.1, 4.3, -4.6, -0.8, vec2(8.6, -52.99).g, 844.429, (-601.349 * -94.19), (215.274 + 879.141), 6956.3310, -5615.1171, -865.227, 7.1, -70.95, 4.1, 6956.3310, 226.703, 71.22, (215.274 + 879.141), vec2(8.6, -52.99).g, -8415.7950, -8535.1626));
        {
         int GLF_live18_looplimiter0 = 0;
         do
          {
           if(GLF_live18_looplimiter0 >= 5)
            {
             break;
            }
           GLF_live18_looplimiter0 ++;
           if(GLF_live18i >= int(GLF_live18resolution.x))
            {
             break;
            }
           if(findLSB(16) * (GLF_live18i / findMSB(16)) == GLF_live18i)
            {
             GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(GLF_live18i / findLSB(16), 50)] = float(GLF_live18i);
            }
           GLF_live18i ++;
          }
         while(GLF_live18i < bitfieldInsert(200, 0, 0, 0));
        }
       }
       if(GLF_live9_looplimiter2 >= 7)
        {
         break;
        }
       GLF_live9_looplimiter2 ++;
       {
        int GLF_live9_looplimiter1 = 0;
        for(int GLF_live9j = 0; GLF_live9j < 4; GLF_live9j ++)
         {
          if(GLF_live9_looplimiter1 >= 7)
           {
            break;
           }
          GLF_live9_looplimiter1 ++;
          GLF_live9data[_GLF_MAKE_IN_BOUNDS_INT(4 * GLF_live9j + GLF_live9i, 16)] = GLF_live9mand(GLF_live9gl_FragCoord.x + float(GLF_live9i - 1), GLF_live9gl_FragCoord.y + float(GLF_live9j - 1));
         }
       }
      }
     {
      int GLF_live11msb10 = _GLF_FUZZED(int(152012u));
      float GLF_live11data[10] = _GLF_FUZZED(float[10](-84.26, -9096.1095, 43.12, 39.79, 5.7, 28.06, -9446.1211, 810.769, 39.79, 28.06));
      int GLF_live11i = _GLF_FUZZED(GLF_live0N);
      uint GLF_live11uselessOutVariable = _GLF_FUZZED(161178u);
      {
       {
        {
         int GLF_live16_looplimiter2 = 0;
         for(int GLF_live16i = int(GLF_live16injectionSwitch.x); GLF_live16i < 10; GLF_live16i ++)
          {
           if(GLF_live16_looplimiter2 >= 3)
            {
             {
              int GLF_live18_looplimiter0 = 0;
              if(GLF_live18_looplimiter0 >= 5)
               {
                1;
               }
             }
             break;
            }
           GLF_live16_looplimiter2 ++;
           {
            int GLF_live21iters = _GLF_FUZZED(GLF_live0N);
            int GLF_live21_looplimiter0 = 0;
            int GLF_live21v = _GLF_FUZZED((-72767 % GLF_live0N));
            int GLF_live21i = _GLF_FUZZED(GLF_live0N);
            for(            GLF_live21i = 0;
 GLF_live21i < GLF_live21iters; GLF_live21i ++)
             {
              if(GLF_live21_looplimiter0 >= 6)
               {
                break;
               }
              GLF_live21_looplimiter0 ++;
              GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
             }
           }
           GLF_live16obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live16i, 10)] = (10 - GLF_live16i) * int(GLF_live16injectionSwitch.y);
          }
        }
        GLF_live16quicksort();
        vec2 GLF_live16grid = vec2(20, 20);
        vec2 GLF_live16uv = GLF_live16gl_FragCoord.xy / GLF_live16resolution;
        vec3 GLF_live16color = GLF_live16palette(vec3(float(GLF_live16obj.numbers[4]) * 0.1), vec3(0.9, float(GLF_live16obj.numbers[8]) * 0.1, 0.8), trunc(vec3(GLF_live16injectionSwitch.y)), vec3(GLF_live16injectionSwitch.x, 0.3, 0.7));
        if(GLF_live16uv.x > (1.0 / 4.0))
         {
          int GLF_live16count = int(GLF_live16injectionSwitch.x);
          {
           int GLF_live16_looplimiter3 = 0;
           do
            {
             if(GLF_live16_looplimiter3 >= 3)
              {
               break;
              }
             GLF_live16_looplimiter3 ++;
             GLF_live16color += GLF_live16palette(vec3(0.5, float(GLF_live16obj.numbers[8]) * 0.1, 0.2), vec3(0.5), trunc(vec3(GLF_live16injectionSwitch.y)), vec3(float(GLF_live16obj.numbers[4]) * 0.1, GLF_live16injectionSwitch.x, 0.6));
             GLF_live16count ++;
            }
           while(GLF_live16count != GLF_live16obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(int(GLF_live16injectionSwitch.x), 10)]);
          }
          GLF_live16grid = vec2(GLF_live16count + GLF_live16obj.numbers[8], GLF_live16count + GLF_live16obj.numbers[6]);
         }
        if(GLF_live16uv.x > (2.0 / 4.0))
         {
          int GLF_live16count = int(GLF_live16injectionSwitch.x);
          {
           int GLF_live16_looplimiter4 = 0;
           do
            {
             if(GLF_live16_looplimiter4 >= 3)
              {
               break;
              }
             GLF_live16_looplimiter4 ++;
             {
              GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](GLF_live0N, GLF_live0N, -62543, 94277, GLF_live0N, GLF_live0N, GLF_live0N, 17738, 50541, -4631)));
              vec3 GLF_live20color = _GLF_FUZZED(vec3(4.6, 43.79, 3.2));
              if(GLF_live20binarySearch(GLF_live20obj, 1) == - 1)
               {
                1;
               }
              else
               {
                GLF_live20color.yz += GLF_live20color.yz;
               }
             }
             GLF_live16color -= GLF_live16palette(vec3(float(GLF_live16obj.numbers[4]) * 0.1), trunc(vec3(0.1)), vec3(float(GLF_live16obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(int(GLF_live16injectionSwitch.y), 10)]) * 0.1), vec3(GLF_live16injectionSwitch.x, float(GLF_live16obj.numbers[2]) * 0.1, float(GLF_live16obj.numbers[8]) * 0.1));
             GLF_live16count ++;
            }
           while(GLF_live16count != GLF_live16obj.numbers[1]);
          }
          GLF_live16grid += vec2(GLF_live16count + int(GLF_live16injectionSwitch.y), GLF_live16count + int(GLF_live16injectionSwitch.x));
         }
        if(GLF_live16uv.x > (3.0 / 4.0))
         {
          {
           int GLF_live20m = _GLF_FUZZED(54859);
           {
            GLF_live20m;
           }
          }
          int GLF_live16count = int(GLF_live16injectionSwitch.x);
          {
           int GLF_live16_looplimiter5 = 0;
           do
            {
             if(GLF_live16_looplimiter5 >= 3)
              {
               break;
              }
             GLF_live16_looplimiter5 ++;
             GLF_live16color -= GLF_live16palette(vec3(float(GLF_live16obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(int(GLF_live16injectionSwitch.y), 10)]) * 0.1), vec3(0.8), trunc(vec3(0.1)), vec3(GLF_live16injectionSwitch.x, 0.6, float(GLF_live16obj.numbers[_GLF_MAKE_IN_BOUNDS_INT(int(GLF_live16injectionSwitch.x), 10)]) * 0.1));
             GLF_live16count ++;
            }
           while(GLF_live16count != GLF_live16obj.numbers[2]);
          }
          GLF_live16grid += vec2(GLF_live16count + GLF_live16obj.numbers[3], GLF_live16count + GLF_live16obj.numbers[3]);
         }
        vec2 GLF_live16position = vec2(GLF_live16gl_FragCoord.x, GLF_live16resolution.x - GLF_live16gl_FragCoord.y);
        GLF_live16position = floor(GLF_live16position / GLF_live16grid);
        GLF_live16_GLF_color = vec4(GLF_live16color, GLF_live16injectionSwitch.y) + vec4(! GLF_live16puzzlelize(GLF_live16position));
       }
      }
      int GLF_live11_looplimiter2 = 0;
      int GLF_live11msb9 = _GLF_FUZZED((2575 << 4295));
      do
       {
        if(GLF_live11_looplimiter2 >= 3)
         {
          break;
         }
        GLF_live11_looplimiter2 ++;
        {
         int GLF_live11_looplimiter1 = 0;
         for(int GLF_live11j = bitfieldExtract(int(GLF_live11injectionSwitch.x), 0, 0); GLF_live11j < findLSB(GLF_live11msb10); GLF_live11j ++)
          {
           if(GLF_live11_looplimiter1 >= 3)
            {
             break;
            }
           GLF_live11_looplimiter1 ++;
           if(uint(GLF_live11j) < uaddCarry(uint(GLF_live11i), 1u, GLF_live11uselessOutVariable))
            {
             continue;
            }
           bool GLF_live11doSwap = GLF_live11checkSwap(GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11i, 10)], GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11j, 10)]);
           if(GLF_live11doSwap)
            {
             float GLF_live11temp = GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11i, 10)];
             GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11i, 10)] = GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11j, 10)];
             {
              {
               1;
              }
             }
             GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11j, 10)] = GLF_live11temp;
            }
          }
        }
        GLF_live11i ++;
        {
         float GLF_live17z = _GLF_FUZZED(1255.4996);
         vec2 GLF_live17a = _GLF_FUZZED(vec2(-946.115, 5.5));
         if(GLF_live17a.y > GLF_live17a.x)
          {
           {
            {
             vec2 GLF_live21pos = GLF_live21gl_FragCoord.xy / GLF_live21resolution;
             ivec2 GLF_live21lin = ivec2(int(GLF_live21pos.x * 10.0), int(GLF_live21pos.y * 10.0));
             int GLF_live21iters = GLF_live21lin.x + GLF_live21lin.y * 10;
             int GLF_live21v = 100;
             int GLF_live21i = _GLF_FUZZED(-36450);
             {
              int GLF_live21_looplimiter0 = 0;
              for(              GLF_live21i = 0;
 GLF_live21i < GLF_live21iters; GLF_live21i ++)
               {
                if(GLF_live21_looplimiter0 >= 6)
                 {
                  break;
                 }
                GLF_live21_looplimiter0 ++;
                GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
               }
             }
             GLF_live21_GLF_color = GLF_live21pal[_GLF_MAKE_IN_BOUNDS_INT(GLF_live21v % 16, 16)];
            }
           }
           GLF_live17z = GLF_live17a.x / GLF_live17a.y;
          }
         else
          {
           GLF_live17z = GLF_live17a.y / GLF_live17a.x;
          }
        }
       }
      while(GLF_live11i < findMSB(GLF_live11msb9));
     }
    }
   }
   {
    {
     1;
    }
   }
   GLF_live1res &= (~ GLF_live1A | ~ GLF_live1B | ~ GLF_live1C | GLF_live1D | GLF_live1E | GLF_live1F | GLF_live1G | ~ GLF_live1I | GLF_live1J) & (~ GLF_live1B | ~ GLF_live1C | GLF_live1D | GLF_live1E | ~ GLF_live1F | ~ GLF_live1G | GLF_live1H | ~ GLF_live1I | GLF_live1J);
   {
    float GLF_live15result = _GLF_FUZZED(760.537);
    {
     GLF_live15result += 0.4;
     {
      int GLF_live20_looplimiter4 = 0;
      if(GLF_live20_looplimiter4 >= 7)
       {
        1;
       }
     }
    }
   }
   {
    int GLF_live18msb9 = _GLF_FUZZED((GLF_live0N >> 1221));
    int GLF_live18msb19 = _GLF_FUZZED(-62211);
    int GLF_live18msb29 = _GLF_FUZZED(GLF_live0N);
    int GLF_live18msb24 = _GLF_FUZZED(GLF_live0N);
    int GLF_live18msb15 = _GLF_FUZZED(-18634);
    int GLF_live18msb14 = _GLF_FUZZED(-47814);
    int GLF_live18msb25 = _GLF_FUZZED(ivec2(99139, 40705).g);
    float GLF_live18A[50] = _GLF_FUZZED(float[50](-97.76, 81.74, -0.7, 9.2, -5.7, 83.33, vec3(-1.0, 89.53, -8.3).r, -1.7, 627.443, 9599.2960, (-44.11 + -11.26), 6968.4507, 442.047, 833.233, -5.4, 6914.4958, 35.26, 8269.0168, 442.047, -0.7, -1.7, -5.4, (-44.11 + -11.26), vec3(-1.0, 89.53, -8.3).r, 9599.2960, 6968.4507, 6914.4958, 8269.0168, 35.26, 627.443, 9.2, 833.233, 83.33, -97.76, 81.74, -5.7, 627.443, 9.2, 833.233, 35.26, 9599.2960, vec3(-1.0, 89.53, -8.3).r, -1.7, 8269.0168, (-44.11 + -11.26), 6914.4958, 83.33, -97.76, -5.7, 81.74));
    int GLF_live18msb20 = _GLF_FUZZED(GLF_live0N);
    int GLF_live18msb30 = _GLF_FUZZED((~ GLF_live0N));
    int GLF_live18msb10 = _GLF_FUZZED(63649);
    if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(40, 0, 0, 0))
     {
      GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(32), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb9), 50)] / GLF_live18resolution.y, 1.0, 1.0);
     }
    else
     if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(60, 0, 0, 0))
      {
       GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb10), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(GLF_live18msb14), 50)] / GLF_live18resolution.y, 1.0, 1.0);
      }
     else
      if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(80, 0, 0, 0))
       {
        GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(GLF_live18msb15), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb19), 50)] / GLF_live18resolution.y, 1.0, 1.0);
       }
      else
       if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(100, 0, 0, 0))
        {
         GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb20), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(GLF_live18msb24), 50)] / GLF_live18resolution.y, 1.0, 1.0);
        }
       else
        if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(120, 0, 0, 0))
         {
          GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(GLF_live18msb25), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb29), 50)] / GLF_live18resolution.y, 1.0, 1.0);
         }
        else
         if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(140, 0, 0, 0))
          {
           GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb30), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(34, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
          }
         else
          if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(160, 0, 0, 0))
           {
            GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(35, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(39, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
           }
          else
           if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(180, 0, 0, 0))
            {
             GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(40, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(44, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
            }
           else
            if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(180, 0, 0, 0))
             {
              GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(45, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(49, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
             }
            else
             {
              1;
             }
   }
   GLF_live1res &= (~ GLF_live1A | GLF_live1B | GLF_live1C | GLF_live1D | GLF_live1E | GLF_live1H | ~ GLF_live1I | GLF_live1J) & (GLF_live1B | GLF_live1C | GLF_live1D | GLF_live1E | GLF_live1F | ~ GLF_live1G | GLF_live1H | ~ GLF_live1I | GLF_live1J) & (GLF_live1A | GLF_live1B | GLF_live1C | ~ GLF_live1D | GLF_live1E | GLF_live1F | GLF_live1G | GLF_live1H | ~ GLF_live1I | GLF_live1J);
   GLF_live1res &= (GLF_live1A | ~ GLF_live1B | GLF_live1C | GLF_live1D | GLF_live1E | GLF_live1F | GLF_live1G | GLF_live1H | ~ GLF_live1I | GLF_live1J) & (~ GLF_live1B | GLF_live1D | GLF_live1E | ~ GLF_live1F | ~ GLF_live1G | ~ GLF_live1H | GLF_live1I | GLF_live1J) & (~ GLF_live1A | ~ GLF_live1B | GLF_live1C | ~ GLF_live1E | ~ GLF_live1G | ~ GLF_live1H | GLF_live1I | ~ GLF_live1J);
   GLF_live1res &= (~ GLF_live1A | ~ GLF_live1D | ~ GLF_live1E | ~ GLF_live1F | GLF_live1G | ~ GLF_live1H | GLF_live1I | ~ GLF_live1J) & (GLF_live1A | GLF_live1B | ~ GLF_live1E | ~ GLF_live1F | ~ GLF_live1G | GLF_live1H | GLF_live1I | ~ GLF_live1J) & (~ GLF_live1B | GLF_live1C | GLF_live1D | ~ GLF_live1E | GLF_live1F | ~ GLF_live1G | GLF_live1H | GLF_live1I | ~ GLF_live1J);
   GLF_live1res &= (~ GLF_live1B | ~ GLF_live1C | ~ GLF_live1D | GLF_live1E | GLF_live1F | ~ GLF_live1G | GLF_live1H | GLF_live1I | ~ GLF_live1J) & (~ GLF_live1A | ~ GLF_live1B | GLF_live1C | ~ GLF_live1D | GLF_live1G | GLF_live1H | GLF_live1I | ~ GLF_live1J) & (~ GLF_live1C | GLF_live1D | ~ GLF_live1E | ~ GLF_live1F | GLF_live1G | GLF_live1H | GLF_live1I | ~ GLF_live1J);
   GLF_live1res &= (~ GLF_live1A | GLF_live1B | GLF_live1C | GLF_live1E | GLF_live1F | GLF_live1G | ~ GLF_live1H | ~ GLF_live1I | GLF_live1J) & (~ GLF_live1A | GLF_live1B | GLF_live1D | GLF_live1E | ~ GLF_live1G | GLF_live1H | ~ GLF_live1I | GLF_live1J);
   {
    int GLF_live15i = _GLF_FUZZED((-14636 / -73298));
    float GLF_live15thirty_two = _GLF_FUZZED(-2.4);
    float GLF_live15result = _GLF_FUZZED(96.15);
    {
     if(mod(float(GLF_live15i), round(GLF_live15thirty_two)) <= 0.01)
      {
       GLF_live15result += 100.0;
      }
    }
   }
   GLF_live1res &= (GLF_live1A | GLF_live1B | ~ GLF_live1C | ~ GLF_live1D | ~ GLF_live1E | ~ GLF_live1F | ~ GLF_live1H | GLF_live1I | ~ GLF_live1J);
   {
    {
     float GLF_live10refh = _GLF_FUZZED(-6.0);
     vec2 GLF_live10uvstep = _GLF_FUZZED((67.35 - vec2(-0.1, -5.4)));
     float GLF_live10slope = _GLF_FUZZED(float(93760));
     float GLF_live10h = _GLF_FUZZED((- float(141197u)));
     int GLF_live10_looplimiter0 = 0;
     int GLF_live10i = _GLF_FUZZED(47495);
     {
      float GLF_live17z = _GLF_FUZZED(963.110);
      {
       int GLF_live21_looplimiter0 = 0;
       if(GLF_live21_looplimiter0 >= 6)
        {
         1;
        }
      }
      vec2 GLF_live17a = _GLF_FUZZED(vec2(977.507, -61.91));
      {
       GLF_live17z = GLF_live17a.x / GLF_live17a.y;
      }
     }
     vec2 GLF_live10coord = _GLF_FUZZED((vec2(-8.1, 57.33) - -79.61));
     {
      mat2 GLF_live14rotationMatrix = _GLF_FUZZED((mat2(-1.7, 981.036, -25.35, 6042.0530) - mat2(-5.3, 0.5, 620.849, 9.8)));
      {
       vec2 GLF_live14aspect = _GLF_FUZZED((uvec4(130785u, 54999u, 11356u, 184954u) , GLF_live14gl_PointCoord));
       GLF_live14aspect = GLF_live14resolution.xy / min(GLF_live14resolution.x, GLF_live14resolution.y);
       vec2 GLF_live14position = _GLF_FUZZED(mix(GLF_live14aspect, vec2(-740.220, -5253.7125), vec2(9.5, -1.8)));
       GLF_live14position = (GLF_live14gl_FragCoord.xy / GLF_live14resolution.xy) * GLF_live14aspect;
       vec2 GLF_live14center = _GLF_FUZZED(vec2(-41.14, 0.7));
       GLF_live14center = vec2(0.5) * GLF_live14aspect;
       GLF_live14position *= GLF_live14rotationMatrix;
       GLF_live14center *= GLF_live14rotationMatrix;
       vec3 GLF_live14result = vec3(0.0);
       {
        int GLF_live14_looplimiter0 = 0;
        for(int GLF_live14i = 35; GLF_live14i >= 0; GLF_live14i --)
         {
          if(GLF_live14_looplimiter0 >= 3)
           {
            break;
           }
          GLF_live14_looplimiter0 ++;
          {
           int GLF_live21iters = _GLF_FUZZED((GLF_live0N << int(false)));
           int GLF_live21_looplimiter0 = 0;
           int GLF_live21v = _GLF_FUZZED(-7019);
           int GLF_live21i = _GLF_FUZZED(GLF_live0N);
           for(           GLF_live21i = 0;
 GLF_live21i < GLF_live21iters; GLF_live21i ++)
            {
             if(GLF_live21_looplimiter0 >= 6)
              {
               break;
              }
             GLF_live21_looplimiter0 ++;
             GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
            }
          }
          vec3 GLF_live14d = _GLF_FUZZED(atan(vec3(910.433, -375.174, -3.6)));
          GLF_live14d = GLF_live14drawShape(GLF_live14position, GLF_live14center + vec2(sin(float(GLF_live14i) / 10.0 + GLF_live14time) / 4.0, 0.0), vec3(0.01 + sin(float(GLF_live14i) / 100.0), 0.01, float(GLF_live14i)));
          if(length(GLF_live14d) <= 0.0)
           {
            continue;
           }
          GLF_live14result = vec3(GLF_live14d);
          {
           int GLF_live18i = _GLF_FUZZED(((mat3x4(-8055.1220, 27.43, 70.56, 77.14, 42.58, 41.73, -52.71, 4.3, -9.1, -4.2, 9219.3084, 1116.6348) != mat3x4(7.0, 7.8, -762.763, 90.87, -8304.2886, 470.854, -4.4, 1980.5194, -5.7, 796.724, 339.828, 1.7)) ? GLF_live0N : (bool(86307u) ? 51941 : GLF_live0N)));
           if(GLF_live18i >= int(GLF_live18resolution.x))
            {
             1;
            }
          }
         }
        {
         int GLF_live19k = _GLF_FUZZED((-3663 >> 90639));
         int GLF_live19i = _GLF_FUZZED(GLF_live0N);
         int GLF_live19_looplimiter1 = 0;
         {
          if(GLF_live19_looplimiter1 >= 5)
           {
            1;
           }
          GLF_live19_looplimiter1 ++;
          GLF_live19temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19k ++, 10)] = GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i ++, 10)];
         }
        }
       }
       GLF_live14result;
      }
     }
     while(GLF_live10h < GLF_live10refh && GLF_live10i < 32)
      {
       if(GLF_live10_looplimiter0 >= 5)
        {
         {
          {
           1;
          }
         }
         {
          vec3 GLF_live14setting = _GLF_FUZZED((vec3(-5002.4918, 3.5, 3.9) / (-837.486 - -2.7)));
          vec2 GLF_live14pos = _GLF_FUZZED((false ? vec2(-2418.6682, -27.61) : vec2(-7854.4309, -2.5)));
          bool GLF_live14c5 = _GLF_FUZZED(true);
          if(! GLF_live14c5)
           {
            GLF_live14computeColor(GLF_live14setting.z / 40.0, GLF_live14pos);
           }
         }
         break;
        }
       GLF_live10_looplimiter0 ++;
       GLF_live10coord -= GLF_live10uvstep;
       {
        int GLF_live18i = _GLF_FUZZED(74204);
        float GLF_live18A[50] = _GLF_FUZZED(float[50]((7624.8798 / -8.9), -8016.1314, -7.8, 2.0, -2450.4659, float(true), 79.52, 63.65, 9.0, -6490.3871, 4741.2360, -9737.2273, -5.8, 5283.2202, ((false ? -6420.2479 : 429.134) / -449.828), 744.216, vec3(5.6, -56.23, -73.12).s, -5.7, 79.52, 9.0, -5.7, ((false ? -6420.2479 : 429.134) / -449.828), -7.8, vec3(5.6, -56.23, -73.12).s, (7624.8798 / -8.9), -5.8, 4741.2360, -2450.4659, -9737.2273, 5283.2202, 2.0, 744.216, -6490.3871, 63.65, -8016.1314, float(true), (7624.8798 / -8.9), -5.8, -5.7, ((false ? -6420.2479 : 429.134) / -449.828), float(true), -8016.1314, -2450.4659, vec3(5.6, -56.23, -73.12).s, 4741.2360, -6490.3871, 744.216, 63.65, 2.0, 79.52));
        uint GLF_live18uselessOutVariable = _GLF_FUZZED(103019u);
        if(GLF_live18i > findMSB(0))
         {
          GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(GLF_live18i, 50)] += GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(int(usubBorrow(uint(GLF_live18i), 1u, GLF_live18uselessOutVariable)), 50)];
         }
       }
       GLF_live10refh += GLF_live10slope;
       {
        float GLF_live17th = _GLF_FUZZED(-82.56);
        {
         GLF_live17th = - GLF_live17th;
        }
       }
       GLF_live10h = texture(tex, GLF_live10coord).y;
       GLF_live10i ++;
      }
    }
    {
     {
      GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](GLF_live0N, GLF_live0N, 70009, GLF_live0N, -52040, GLF_live0N, GLF_live0N, -35599, GLF_live0N, 6864)));
      vec3 GLF_live20color = _GLF_FUZZED((false ? vec3(-2.4, -3.8, -53.17) : ((false ? 5.6 : 6.0) * vec3(-583.020, -5.9, 5159.8862))));
      {
       if(GLF_live20binarySearch(GLF_live20obj, GLF_live20obj.prime_numbers[4]) != - (int(GLF_live20resolution.y)) && GLF_live20binarySearch(GLF_live20obj, GLF_live20obj.prime_numbers[0]) >= - (int(GLF_live20resolution.x)))
        {
         GLF_live20color.yz -= dot(float(GLF_live20binarySearch(GLF_live20obj, GLF_live20obj.prime_numbers[4])), float(GLF_live20binarySearch(GLF_live20obj, GLF_live20obj.prime_numbers[0])));
        }
       else
        {
         1;
        }
      }
     }
     vec3 GLF_live4texel = texture(GLF_live4tex, GLF_live4gl_FragCoord.xy * (1.0 / 256.0)).xyz;
     vec2 GLF_live4reuse = (GLF_live4texel.xz + GLF_live4texel.yy) * 0.5 + vec2(0.25, 0.25);
     GLF_live4reuse = floor(GLF_live4reuse * 256.0) / 256.0;
     GLF_live4_GLF_color = texture(GLF_live4tex, GLF_live4reuse);
    }
   }
   {
    float GLF_live18A[50] = _GLF_FUZZED(float[50](-792.822, -468.707, -5338.7600, -1393.7178, -83.79, (false ? -23.75 : 7698.5145), 8459.5561, -6868.0188, ((8.9 * -0.9)), 80.04, 8215.9070, -52.66, 92.50, -79.49, (+ 3.0), (-3.2 - 0.6), -1.0, -7816.2714, -26.60, (-3.2 - 0.6), -1393.7178, -6868.0188, 8459.5561, -26.60, -52.66, -7816.2714, 80.04, -468.707, -79.49, -1.0, ((8.9 * -0.9)), 92.50, -5338.7600, (+ 3.0), -83.79, (false ? -23.75 : 7698.5145), -792.822, 8215.9070, -83.79, -792.822, 8459.5561, -5338.7600, -26.60, -1.0, (-3.2 - 0.6), (+ 3.0), -7816.2714, -468.707, (false ? -23.75 : 7698.5145), 92.50));
    {
     GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(40, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(44, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
    }
   }
   GLF_live1res &= (~ GLF_live1A | ~ GLF_live1C | ~ GLF_live1E | ~ GLF_live1F | GLF_live1G | ~ GLF_live1H | GLF_live1I | ~ GLF_live1J);
   {
    {
     int GLF_live16l = 0, GLF_live16h = 9;
     int GLF_live16stack[10] = _GLF_FUZZED(int[10](GLF_live16h, GLF_live16l, GLF_live16l, GLF_live16l, (uvec2(30018u, 90898u) , GLF_live16h), ivec2(-30762, -90982)[0], GLF_live16l, GLF_live16h, GLF_live16l, (GLF_live16h --)));
     int GLF_live16top = - 1;
     GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16l;
     GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16h;
     {
      int GLF_live16_looplimiter1 = 0;
      while(GLF_live16top >= 0)
       {
        if(GLF_live16_looplimiter1 >= 3)
         {
          break;
         }
        GLF_live16_looplimiter1 ++;
        GLF_live16h = GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(GLF_live16top --, 10)];
        GLF_live16l = GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(GLF_live16top --, 10)];
        int GLF_live16p = GLF_live16performPartition(GLF_live16l, GLF_live16h);
        if(GLF_live16p - 1 > GLF_live16l)
         {
          GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16l;
          GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16p - 1;
         }
        if(GLF_live16p + 1 < GLF_live16h)
         {
          GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16p + 1;
          GLF_live16stack[_GLF_MAKE_IN_BOUNDS_INT(++ GLF_live16top, 10)] = GLF_live16h;
         }
       }
     }
    }
   }
   GLF_live1res &= (GLF_live1A | ~ GLF_live1B | ~ GLF_live1C | GLF_live1D | ~ GLF_live1E | ~ GLF_live1F | ~ GLF_live1H | GLF_live1I | ~ GLF_live1J);
   {
    int GLF_live5_looplimiter2 = 0;
    uint GLF_live5uselessOutVariable = _GLF_FUZZED(36931u);
    vec3 GLF_live5data[16] = _GLF_FUZZED(vec3[16](vec3(-6.1, -4.9, -9950.9247), vec3(21.60, -1.8, 403.442), vec3(-9876.5648, 854.560, 5.7), vec3(0.3, -4.4, -6686.5904), vec3(-3.8, 5949.2061, -84.32), vec3(54.75, -118.389, -4.0), vec3(9.4, 31.85, 265.442), vec3(4100.6705), vec3(9381.7955, -6.6, 0.1), vec3(-94.38, 8.2, 5.1), vec3(-9520.3597, 82.44, -7396.0252), (69.23 + vec3(-7861.6576, -1.8, 28.61)), vec3(787.984, -8.4, 1.0), (mat4x3(25.53, 4.5, 86.85, -0.9, -0.0, 696.963, -10.24, -5.8, 415.123, -2531.9848, -2.2, -8.6) * (vec4(-8.0, 9133.0840, -51.43, -5.0) / -27.49)), vec3(22.23, -77.85, 612.819), vec3(-86.69, -6677.4225, -1557.3261)));
    for(int GLF_live5i = 0; GLF_live5i < findMSB(16); GLF_live5i ++)
     {
      if(GLF_live5_looplimiter2 >= 5)
       {
        {
         int GLF_live20_looplimiter2 = 0;
         int GLF_live20a = _GLF_FUZZED(int(true));
         int GLF_live20b = _GLF_FUZZED((-35492 ^ GLF_live0N));
         int GLF_live20c = _GLF_FUZZED(-84378);
         vec2 GLF_live20uv = _GLF_FUZZED(vec2(2.9, -234.173));
         {
          if(GLF_live20_looplimiter2 >= 7)
           {
            1;
           }
          GLF_live20_looplimiter2 ++;
          GLF_live20uv.y -= step(GLF_live20injectionSwitch.y, GLF_live20uv.x) + float(GLF_live20a) + float(GLF_live20b);
          GLF_live20uv.x += ldexp(GLF_live20injectionSwitch.y, isinf(GLF_live20uv.y + GLF_live20uv.x) ? findMSB(GLF_live20b) : findMSB(GLF_live20a));
          GLF_live20c --;
         }
        }
        break;
       }
      GLF_live5_looplimiter2 ++;
      {
       int GLF_live8i = _GLF_FUZZED(-70661);
       {
        int GLF_live18msb9 = _GLF_FUZZED((- GLF_live0N));
        int GLF_live18msb19 = _GLF_FUZZED(-59734);
        int GLF_live18msb29 = _GLF_FUZZED(GLF_live0N);
        int GLF_live18msb24 = _GLF_FUZZED((~ -3483));
        int GLF_live18msb15 = _GLF_FUZZED(GLF_live0N);
        int GLF_live18msb14 = _GLF_FUZZED((GLF_live0N));
        int GLF_live18msb25 = _GLF_FUZZED(1772);
        int GLF_live18msb20 = _GLF_FUZZED((GLF_live0N ^ -77776));
        float GLF_live18A[50] = _GLF_FUZZED(float[50]((false ? -2.8 : -6.8), -904.934, -796.065, (7065.7617 * 8.5), -0.0, -5.5, -0.2, 451.728, 285.468, 0.3, -831.606, (false ? 92.92 : 3.3), vec3(-54.21, -0.9, 7970.6841).r, 1783.2991, -12.46, ((-76.65 - 7.4) - 8.6), 827.023, 1.5, -2.9, -0.1, (false ? -2.8 : -6.8), -5.5, 827.023, -796.065, -904.934, (7065.7617 * 8.5), 451.728, 0.3, -2.9, 285.468, 1.5, vec3(-54.21, -0.9, 7970.6841).r, 1783.2991, -0.2, -12.46, -0.1, (false ? 92.92 : 3.3), -831.606, -0.0, ((-76.65 - 7.4) - 8.6), ((-76.65 - 7.4) - 8.6), -5.5, -0.2, 0.3, (7065.7617 * 8.5), 451.728, (false ? -2.8 : -6.8), 827.023, vec3(-54.21, -0.9, 7970.6841).r, -796.065));
        int GLF_live18msb30 = _GLF_FUZZED(-20979);
        int GLF_live18msb10 = _GLF_FUZZED(GLF_live0N);
        if(int(GLF_live18gl_FragCoord.x) < findLSB(GLF_live18msb20))
         {
          GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldReverse(0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(16), 50)] / GLF_live18resolution.y, 1.0, 1.0);
         }
        else
         if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(40, 0, 0, 0))
          {
           GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(32), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb9), 50)] / GLF_live18resolution.y, 1.0, 1.0);
          }
         else
          if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(60, 0, 0, 0))
           {
            GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb10), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(GLF_live18msb14), 50)] / GLF_live18resolution.y, 1.0, 1.0);
           }
          else
           if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(80, 0, 0, 0))
            {
             GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(GLF_live18msb15), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb19), 50)] / GLF_live18resolution.y, 1.0, 1.0);
            }
           else
            if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(100, 0, 0, 0))
             {
              GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb20), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(GLF_live18msb24), 50)] / GLF_live18resolution.y, 1.0, 1.0);
             }
            else
             if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(120, 0, 0, 0))
              {
               GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(GLF_live18msb25), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb29), 50)] / GLF_live18resolution.y, 1.0, 1.0);
              }
             else
              if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(140, 0, 0, 0))
               {
                GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb30), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(34, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
               }
              else
               if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(160, 0, 0, 0))
                {
                 GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(35, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(39, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
                }
               else
                if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(180, 0, 0, 0))
                 {
                  GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(40, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(44, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
                 }
                else
                 if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(180, 0, 0, 0))
                  {
                   GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(45, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(49, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
                  }
                 else
                  {
                   1;
                  }
       }
       int GLF_live8_looplimiter3 = 0;
       float GLF_live8A[50] = _GLF_FUZZED(float[50](-535.875, -8753.7699, -4399.0000, 4.5, (569.210 + float(81301)), 4.9, -4020.6531, -4.7, 951.588, 303.157, (-57.39 * vec4(-2.4, 9.7, 672.628, 253.941).t), 79.53, float(GLF_live0N), 4276.0123, 0.5, -31.51, -1.1, -81.72, 4276.0123, -8753.7699, 0.5, 303.157, -1.1, 4.9, -81.72, 79.53, -4020.6531, -31.51, -4399.0000, (-57.39 * vec4(-2.4, 9.7, 672.628, 253.941).t), float(GLF_live0N), 4.5, 951.588, -4.7, (569.210 + float(81301)), -535.875, 4276.0123, (-57.39 * vec4(-2.4, 9.7, 672.628, 253.941).t), 303.157, -535.875, (569.210 + float(81301)), float(GLF_live0N), -4.7, 79.53, 0.5, 4.5, 951.588, -4399.0000, -1.1, -4020.6531));
       {
        if(GLF_live8_looplimiter3 >= 3)
         {
          1;
          {
           int GLF_live11msb10 = _GLF_FUZZED((false ? GLF_live0N : 10003));
           float GLF_live11data[10] = _GLF_FUZZED(float[10](-614.317, -19.32, float(18808u), -30.92, 9.6, -1.4, 3.5, (-4505.2559 + 5.6), 0.0, 9149.1472));
           int GLF_live11i = _GLF_FUZZED(-80990);
           uint GLF_live11uselessOutVariable = _GLF_FUZZED(129448u);
           {
            int GLF_live11_looplimiter1 = 0;
            for(int GLF_live11j = bitfieldExtract(int(GLF_live11injectionSwitch.x), 0, 0); GLF_live11j < findLSB(GLF_live11msb10); GLF_live11j ++)
             {
              if(GLF_live11_looplimiter1 >= 3)
               {
                break;
                {
                 {
                  {
                   1;
                  }
                 }
                 vec2 GLF_live17coord = _GLF_FUZZED(vec2(65.68, -6.5));
                 {
                  float GLF_live17pi = (355.0 / 113.0);
                  vec2 GLF_live17center = GLF_live17coord - vec2(0.5);
                  float GLF_live17dist = length(GLF_live17center);
                  float GLF_live17angle = GLF_live17ReallyApproxNormalizedAtan2(GLF_live17center);
                  vec2(GLF_live17dist, GLF_live17angle);
                 }
                }
               }
              GLF_live11_looplimiter1 ++;
              if(uint(GLF_live11j) < uaddCarry(uint(GLF_live11i), 1u, GLF_live11uselessOutVariable))
               {
                {
                 vec3 GLF_live16c = _GLF_FUZZED((mat4x3(mat2x3(48.96, 32.25, 9996.2284, -4.1, -5214.1707, -7199.1051)) * vec4(-705.882, -673.486, 1.0, -2422.8307)));
                 vec3 GLF_live16d = _GLF_FUZZED(vec3(0.2, 0.4, -5965.5216));
                 vec3 GLF_live16a = _GLF_FUZZED((+ vec3(6885.4192, 27.51, -5.9)));
                 vec3 GLF_live16b = _GLF_FUZZED(vec3(-59.61, -281.055, -594.704));
                 {
                  fract(mix(GLF_live16d * GLF_live16a, GLF_live16a * GLF_live16c, GLF_live16b + GLF_live16d - GLF_live16c));
                  {
                   int GLF_live18i = _GLF_FUZZED(GLF_live0N);
                   if(GLF_live18i < int(GLF_live18gl_FragCoord.x))
                    {
                     1;
                    }
                  }
                 }
                }
                continue;
               }
              bool GLF_live11doSwap = GLF_live11checkSwap(GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11i, 10)], GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11j, 10)]);
              if(GLF_live11doSwap)
               {
                float GLF_live11temp = GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11i, 10)];
                GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11i, 10)] = GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11j, 10)];
                GLF_live11data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live11j, 10)] = GLF_live11temp;
               }
             }
           }
          }
         }
        GLF_live8_looplimiter3 ++;
        if(GLF_live8i >= int(GLF_live8resolution.x))
         {
          1;
         }
        if((4 * (GLF_live8i / 4)) == GLF_live8i)
         {
          GLF_live8A[_GLF_MAKE_IN_BOUNDS_INT(GLF_live8i / 4, 50)] = float(GLF_live8i);
         }
       }
      }
      {
       int GLF_live5_looplimiter1 = 0;
       {
        int GLF_live18_looplimiter0 = 0;
        int GLF_live18i = _GLF_FUZZED(GLF_live0N);
        float GLF_live18A[50] = _GLF_FUZZED(float[50](-4.4, -4.2, 7.4, -412.203, float(true), -1.9, -1.0, float(-25810), -551.648, 1.6, 14.48, 3.1, (4.3 * 8.6), 250.521, -2338.9642, 5.5, -604.417, -44.59, float(-25810), -4.4, -4.2, (4.3 * 8.6), 5.5, float(true), -1.9, -551.648, 14.48, 7.4, 250.521, -412.203, 3.1, -44.59, -604.417, -1.0, 1.6, -2338.9642, -551.648, float(true), -1.9, -412.203, 3.1, -44.59, float(-25810), -604.417, 5.5, 1.6, -4.4, -1.0, 250.521, -2338.9642));
        do
         {
          if(GLF_live18_looplimiter0 >= 5)
           {
            break;
           }
          GLF_live18_looplimiter0 ++;
          if(GLF_live18i >= int(GLF_live18resolution.x))
           {
            break;
           }
          if(findLSB(16) * (GLF_live18i / findMSB(16)) == GLF_live18i)
           {
            GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(GLF_live18i / findLSB(16), 50)] = float(GLF_live18i);
           }
          GLF_live18i ++;
         }
        while(GLF_live18i < bitfieldInsert(200, 0, 0, 0));
       }
       for(int GLF_live5j = 0; GLF_live5j < findLSB(16); GLF_live5j ++)
        {
         {
          vec2 GLF_live12pos = _GLF_FUZZED(vec2(8737.4823, 50.18));
          vec4 GLF_live12quad = _GLF_FUZZED((vec4(-6.0, -3.5, -4169.6191, 6752.0596) + vec4(-50.03, -1.3, -1.0, 3296.1995)).gggr);
          {
           float GLF_live17z = _GLF_FUZZED(5.4);
           vec2 GLF_live17a = _GLF_FUZZED(vec2(2.6, -5.6));
           {
            {
             int GLF_live21iters = _GLF_FUZZED(82459);
             int GLF_live21_looplimiter0 = 0;
             int GLF_live21v = _GLF_FUZZED(GLF_live0N);
             int GLF_live21i = _GLF_FUZZED(-59645);
             for(             GLF_live21i = 0;
 GLF_live21i < GLF_live21iters; GLF_live21i ++)
              {
               if(GLF_live21_looplimiter0 >= 6)
                {
                 break;
                }
               GLF_live21_looplimiter0 ++;
               GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
              }
            }
            GLF_live17z = GLF_live17a.y / GLF_live17a.x;
           }
          }
          if(GLF_live12pos.y < GLF_live12quad.y)
           {
            {
             int GLF_live15i = _GLF_FUZZED(28598);
             float GLF_live15thirty_two = _GLF_FUZZED(float(44169));
             float GLF_live15result = _GLF_FUZZED(-6968.0075);
             {
              if(mod(float(GLF_live15i), round(GLF_live15thirty_two)) <= 0.01)
               {
                GLF_live15result += 100.0;
               }
             }
            }
            false;
            {
             vec3 GLF_live14setting = _GLF_FUZZED(vec3(9.1, 7.0, 89.78));
             vec2 GLF_live14pos = _GLF_FUZZED((5.7 * (- vec2(-133.740, -7486.6112))));
             {
              GLF_live14computeColor(GLF_live14setting.z / 40.0, GLF_live14pos);
             }
            }
           }
         }
         {
          float GLF_live7th = _GLF_FUZZED(-0.9);
          {
           {
            float GLF_live18A[50] = _GLF_FUZZED(float[50](-45.23, vec2(33.16, -1.6).g, 159.877, 27.84, 5.5, -0.0, 0.3, 10.32, 41.17, -566.776, 6.7, -1421.1248, -7365.2085, (float(true) * 6.2), 21.93, -9813.3836, 2861.6063, -2577.2283, float(70096), -2042.6943, float(70096), -1421.1248, (float(true) * 6.2), -0.0, -566.776, -9813.3836, -45.23, 27.84, 0.3, -2577.2283, -7365.2085, -2042.6943, vec2(33.16, -1.6).g, 2861.6063, 6.7, 41.17, 159.877, 5.5, 10.32, 21.93, 27.84, 159.877, -9813.3836, 6.7, -45.23, 10.32, 21.93, float(70096), -566.776, 0.3));
            if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(160, 0, 0, 0))
             {
              GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(35, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(39, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
             }
            else
             if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(180, 0, 0, 0))
              {
               GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(40, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(44, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
              }
             else
              if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(180, 0, 0, 0))
               {
                GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(45, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(49, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
               }
              else
               {
                1;
               }
           }
           int GLF_live13i = _GLF_FUZZED(GLF_live0N);
           int GLF_live13result = _GLF_FUZZED(GLF_live0N);
           int GLF_live13count = _GLF_FUZZED((90991 ^ -69014));
           {
            {
             GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10]((-26486 - GLF_live0N), 11622, GLF_live0N, 21288, (-18513 | GLF_live0N), GLF_live0N, GLF_live0N, 83086, (50059), 85059)));
             vec3 GLF_live20color = _GLF_FUZZED(vec3(5.4, 3.8, 1.0));
             {
              if(GLF_live20binarySearch(GLF_live20obj, 1) == - 1)
               {
                1;
               }
              else
               {
                GLF_live20color.yz += GLF_live20color.yz;
               }
             }
            }
            1;
            1;
            1;
            1;
            {
             {
              GLF_live20BinarySearchObject GLF_live20obj = _GLF_FUZZED(GLF_live20BinarySearchObject(int[10](77997, 86366, -31621, -8766, (-21257 + 38296), 55946, 55483, -4163, -32021, -70658)));
              {
               int GLF_live20_looplimiter5 = 0;
               for(int GLF_live20i = 0; GLF_live20i < 10; GLF_live20i ++)
                {
                 if(GLF_live20_looplimiter5 >= 7)
                  {
                   break;
                  }
                 GLF_live20_looplimiter5 ++;
                 if(GLF_live20i == 0)
                  {
                   GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 2;
                  }
                 else
                  if(GLF_live20i == 1)
                   {
                    GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 3;
                   }
                  else
                   if(GLF_live20i == 2)
                    {
                     GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 5;
                    }
                   else
                    if(GLF_live20i == 3)
                     {
                      GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 7;
                     }
                    else
                     if(GLF_live20i == 4)
                      {
                       GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 11;
                      }
                     else
                      if(GLF_live20i == 5)
                       {
                        GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 13;
                       }
                      else
                       if(GLF_live20i == 6)
                        {
                         GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 17;
                        }
                       else
                        if(GLF_live20i == 7)
                         {
                          GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 19;
                         }
                        else
                         if(GLF_live20i == 8)
                          {
                           GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 23;
                          }
                         else
                          if(GLF_live20i == 9)
                           {
                            GLF_live20obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 29;
                           }
                }
              }
              vec2 GLF_live20uv = (GLF_live20gl_FragCoord.xy / GLF_live20resolution.x) * vec2(GLF_live20resolution.x / GLF_live20resolution.y, 1.0);
              vec2 GLF_live20b = GLF_live20brick(GLF_live20uv * 7.0);
              vec3 GLF_live20color = vec3(GLF_live20patternize(GLF_live20b));
              if(GLF_live20gl_FragCoord.y < GLF_live20resolution.y / 1.1)
               {
                if(GLF_live20binarySearch(GLF_live20obj, GLF_live20obj.prime_numbers[4]) != - (int(GLF_live20resolution.y)) && GLF_live20binarySearch(GLF_live20obj, GLF_live20obj.prime_numbers[0]) >= - (int(GLF_live20resolution.x)))
                 {
                  GLF_live20color.yz -= dot(float(GLF_live20binarySearch(GLF_live20obj, GLF_live20obj.prime_numbers[4])), float(GLF_live20binarySearch(GLF_live20obj, GLF_live20obj.prime_numbers[0])));
                 }
                else
                 {
                  1;
                 }
               }
              else
               {
                if(GLF_live20binarySearch(GLF_live20obj, 1) == - 1)
                 {
                  1;
                 }
                else
                 {
                  GLF_live20color.yz += GLF_live20color.yz;
                 }
               }
              GLF_live20_GLF_color = vec4(GLF_live20color, GLF_live20injectionSwitch.y);
             }
            }
            1;
            1;
            1;
            1;
            1;
            1;
            if(GLF_live13result == GLF_live13i)
             {
              GLF_live13count ++;
             }
            1;
            {
             int GLF_live15_looplimiter0 = 0;
             if(GLF_live15_looplimiter0 >= 4)
              {
               1;
              }
            }
            1;
            if(GLF_live13result == - 1)
             {
              GLF_live13count ++;
             }
            1;
           }
           {
            {
             1;
            }
           }
          }
          {
           GLF_live7th = 1.0 - GLF_live7th;
          }
         }
         {
          {
           vec2 GLF_live21pos = GLF_live21gl_FragCoord.xy / GLF_live21resolution;
           ivec2 GLF_live21lin = ivec2(int(GLF_live21pos.x * 10.0), int(GLF_live21pos.y * 10.0));
           int GLF_live21iters = GLF_live21lin.x + GLF_live21lin.y * 10;
           int GLF_live21v = 100;
           int GLF_live21i = _GLF_FUZZED(-36450);
           {
            int GLF_live21_looplimiter0 = 0;
            for(            GLF_live21i = 0;
 GLF_live21i < GLF_live21iters; GLF_live21i ++)
             {
              if(GLF_live21_looplimiter0 >= 6)
               {
                break;
               }
              GLF_live21_looplimiter0 ++;
              GLF_live21v = (4 * GLF_live21v * (1000 - GLF_live21v)) / 1000;
             }
           }
           GLF_live21_GLF_color = GLF_live21pal[_GLF_MAKE_IN_BOUNDS_INT(GLF_live21v % 16, 16)];
          }
         }
         {
          vec2 GLF_live12pos = _GLF_FUZZED((vec4(-0.1, -1.8, 591.240, 4.7) * mat2x4(3780.4777, 82.12, 2.2, 9.4, -25.41, 8.3, -3.1, 2.1)));
          vec4 GLF_live12quad = _GLF_FUZZED(vec4(-4.0, -9.8, -56.49, -112.379));
          if(GLF_live12pos.y < GLF_live12quad.y)
           {
            {
             float GLF_live18A[50] = _GLF_FUZZED(float[50](7060.2716, 7.4, -5.5, 455.479, -7.8, 16.11, (+ -3958.0214), 665.990, -2.7, 6072.1559, (- (20.79 + -1.9)), float(true), -2.6, 115.584, -4.0, 9.9, -3254.7459, -4.4, 8.6, 8.6, 9.9, -2.7, 7060.2716, float(true), -4.0, -2.6, -5.5, 16.11, 455.479, -7.8, (+ -3958.0214), 6072.1559, -4.4, 665.990, 7.4, (- (20.79 + -1.9)), -3254.7459, 115.584, -2.7, -3254.7459, (+ -3958.0214), -2.6, 9.9, float(true), -7.8, -5.5, 115.584, 6072.1559, 665.990, 7.4));
             {
              GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldReverse(0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(16), 50)] / GLF_live18resolution.y, 1.0, 1.0);
             }
            }
            false;
           }
         }
         if(GLF_live5_looplimiter1 >= 5)
          {
           break;
          }
         {
          int GLF_live15_looplimiter0 = 0;
          float GLF_live15limit = _GLF_FUZZED((-664.637 * 7152.1517));
          float GLF_live15result = _GLF_FUZZED((- 8585.9179));
          float GLF_live15thirty_two = _GLF_FUZZED(-235.650);
          for(int GLF_live15i = 1; GLF_live15i < 800; GLF_live15i ++)
           {
            if(GLF_live15_looplimiter0 >= 4)
             {
              break;
             }
            GLF_live15_looplimiter0 ++;
            if((GLF_live15i % 32) == 0)
             {
              GLF_live15result += 0.4;
             }
            else
             {
              if(mod(float(GLF_live15i), round(GLF_live15thirty_two)) <= 0.01)
               {
                GLF_live15result += 100.0;
               }
             }
            if(float(GLF_live15i) >= GLF_live15limit)
             {
              GLF_live15result;
             }
           }
         }
         GLF_live5_looplimiter1 ++;
         GLF_live5data[_GLF_MAKE_IN_BOUNDS_UINT(uaddCarry(uint(4 * GLF_live5j), uint(GLF_live5i), GLF_live5uselessOutVariable), 16u)] = GLF_live5mand(GLF_live5gl_FragCoord.x + float(GLF_live5i - bitCount(1)), GLF_live5gl_FragCoord.y + float(GLF_live5j - bitCount(1)));
        }
       {
        int GLF_live18msb9 = _GLF_FUZZED(GLF_live0N);
        int GLF_live18msb19 = _GLF_FUZZED(GLF_live0N);
        int GLF_live18msb29 = _GLF_FUZZED(8053);
        int GLF_live18msb24 = _GLF_FUZZED(GLF_live0N);
        int GLF_live18msb15 = _GLF_FUZZED(-89532);
        int GLF_live18msb14 = _GLF_FUZZED(-89944);
        int GLF_live18msb25 = _GLF_FUZZED(-40613);
        float GLF_live18A[50] = _GLF_FUZZED(float[50](-8.0, -8.1, -50.74, 0.8, (false ? -3484.0855 : -6.2), -982.306, -9586.3152, vec4(436.436, -405.556, 78.81, 0.0).g, 5.4, 5386.5817, vec2(-467.016, 16.31).x, -28.77, -8.6, (true ? -4.7 : -6574.4149), 8872.5563, 4.0, 5.5, -7.1, 3.4, (true ? -4.7 : -6574.4149), -982.306, (false ? -3484.0855 : -6.2), vec4(436.436, -405.556, 78.81, 0.0).g, 5386.5817, 8872.5563, 3.4, -9586.3152, -8.0, 4.0, 0.8, -8.6, 5.4, -7.1, -8.1, vec2(-467.016, 16.31).x, -50.74, -28.77, 5.5, -7.1, -28.77, vec2(-467.016, 16.31).x, 4.0, (true ? -4.7 : -6574.4149), -8.6, 3.4, -8.1, -8.0, 5.5, 8872.5563, (false ? -3484.0855 : -6.2)));
        int GLF_live18msb20 = _GLF_FUZZED((~ 97730));
        int GLF_live18msb30 = _GLF_FUZZED(16155);
        int GLF_live18msb10 = _GLF_FUZZED(ivec3(2096, 10240, 22706).y);
        if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(40, 0, 0, 0))
         {
          GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(32), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb9), 50)] / GLF_live18resolution.y, 1.0, 1.0);
         }
        else
         if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(60, 0, 0, 0))
          {
           GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb10), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(GLF_live18msb14), 50)] / GLF_live18resolution.y, 1.0, 1.0);
          }
         else
          if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(80, 0, 0, 0))
           {
            GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(GLF_live18msb15), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb19), 50)] / GLF_live18resolution.y, 1.0, 1.0);
           }
          else
           if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(100, 0, 0, 0))
            {
             GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb20), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(GLF_live18msb24), 50)] / GLF_live18resolution.y, 1.0, 1.0);
            }
           else
            if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(120, 0, 0, 0))
             {
              GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findLSB(GLF_live18msb25), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb29), 50)] / GLF_live18resolution.y, 1.0, 1.0);
             }
            else
             if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(140, 0, 0, 0))
              {
               GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(findMSB(GLF_live18msb30), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(34, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
              }
             else
              if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(160, 0, 0, 0))
               {
                GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(35, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(39, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
               }
              else
               if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(180, 0, 0, 0))
                {
                 GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(40, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(44, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
                }
               else
                if(int(GLF_live18gl_FragCoord.x) < bitfieldInsert(180, 0, 0, 0))
                 {
                  GLF_live18_GLF_color = vec4(GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(45, 0, 0, 0), 50)] / GLF_live18resolution.x, GLF_live18A[_GLF_MAKE_IN_BOUNDS_INT(bitfieldInsert(49, 0, 0, 0), 50)] / GLF_live18resolution.y, 1.0, 1.0);
                 }
                else
                 {
                  1;
                 }
       }
      }
     }
   }
   GLF_live1res &= (GLF_live1B | ~ GLF_live1C | GLF_live1D | ~ GLF_live1E | ~ GLF_live1F | ~ GLF_live1G | ~ GLF_live1H | GLF_live1I | ~ GLF_live1J) & (~ GLF_live1A | ~ GLF_live1B | ~ GLF_live1C | GLF_live1D | ~ GLF_live1E | GLF_live1F | ~ GLF_live1H | GLF_live1I | ~ GLF_live1J) & (~ GLF_live1B | ~ GLF_live1C | GLF_live1D | ~ GLF_live1E | GLF_live1F | ~ GLF_live1G | ~ GLF_live1H | GLF_live1I | ~ GLF_live1J);
   GLF_live1_GLF_color = vec4(vec3(float(GLF_live1res == 0 ? 0.0 : 1.0)), 1.0);
  }
 }
 {
  int GLF_live2iteration = _GLF_FUZZED((GLF_live0N));
  if(GLF_live2iteration < 1000)
   {
    GLF_live2pickColor(GLF_live2iteration);
   }
  else
   {
    vec3(0.0, 0.0, 0.5);
   }
 }
 {
  vec2 GLF_live17coord = _GLF_FUZZED(vec2(-5005.4238, 9194.0061));
  {
   float GLF_live17pi = (355.0 / 113.0);
   {
    {
     1;
    }
   }
   vec2 GLF_live17center = GLF_live17coord - vec2(0.5);
   float GLF_live17dist = length(GLF_live17center);
   float GLF_live17angle = GLF_live17ReallyApproxNormalizedAtan2(GLF_live17center);
   vec2(GLF_live17dist, GLF_live17angle);
  }
 }
 {
  {
   int GLF_live19_looplimiter5 = 0;
   int GLF_live19i = _GLF_FUZZED((+ GLF_live0N));
   do
    {
     if(GLF_live19_looplimiter5 >= 5)
      {
       break;
      }
     GLF_live19_looplimiter5 ++;
     switch(GLF_live19i)
      {
       case 0:
       GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = 4;
       break;
       case 1:
       GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = 3;
       break;
       case 2:
       GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = 2;
       break;
       case 3:
       GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = 1;
       break;
       case 4:
       GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = 0;
       break;
       case 5:
       GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = - 1;
       break;
       case 6:
       GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = - 2;
       break;
       case 7:
       GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = - 3;
       break;
       case 8:
       GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = - 4;
       break;
       case 9:
       GLF_live19data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live19i, 10)] = - 5;
       break;
      }
     GLF_live19i ++;
    }
   while(GLF_live19i < 10);
  }
  float GLF_live0grey = _GLF_FUZZED((+ -304.194));
  {
   GLF_live0grey = 0.5 + float(GLF_live0data[3]) / 10.0;
  }
 }
}
