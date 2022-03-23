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

precision highp int;

layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
mediump vec4 GLF_live20gl_FragCoord = _GLF_FUZZED(vec4(8.7, -8.0, 1.4, 2.3));

const int GLF_live20N = 10;

int GLF_live20data[10] = _GLF_FUZZED(int[10](35246, 69528, (GLF_live20N + 10650), (GLF_live20N + GLF_live20N), 14940, 4936, GLF_live20N, int(false), GLF_live20N, 14940)), GLF_live20temp[10] = _GLF_FUZZED(int[10]((int(123805u) | GLF_live20N), 82478, GLF_live20N, 57824, ((4292u != 85419u) ? (GLF_live20N << -55017) : GLF_live20N), GLF_live20N, (GLF_live20N / ivec4(-58777, -53889, 18545, -87337)).b, 97094, int((mat4x3(-7677.8806, 32.84, -1042.4749, 5.7, -60.99, -1303.2421, 26.86, 6.7, 2.3, -5272.5221, 6.1, -9.8) == mat4x3(-7.8, -8.3, -57.01, -75.99, -491.128, 7179.3387, 88.85, -6.6, -2069.2878, -562.541, -8420.8856, -58.81))), 48346));

void GLF_live20merge(int GLF_live20from, int GLF_live20mid, int GLF_live20to)
{
 int GLF_live20k = GLF_live20from, GLF_live20i = GLF_live20from, GLF_live20j = GLF_live20mid + 1;
 {
  int GLF_live20_looplimiter0 = 0;
  while(GLF_live20i <= GLF_live20mid && GLF_live20j <= GLF_live20to)
   {
    if(GLF_live20_looplimiter0 >= 7)
     {
      break;
     }
    GLF_live20_looplimiter0 ++;
    if(GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] < GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20j, 10)])
     {
      GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20k ++, 10)] = GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i ++, 10)];
     }
    else
     {
      GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20k ++, 10)] = GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20j ++, 10)];
     }
   }
 }
 {
  int GLF_live20_looplimiter1 = 0;
  while(GLF_live20i < GLF_live20N && GLF_live20i <= GLF_live20mid)
   {
    if(GLF_live20_looplimiter1 >= 7)
     {
      break;
     }
    GLF_live20_looplimiter1 ++;
    GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20k ++, 10)] = GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i ++, 10)];
   }
 }
 {
  int GLF_live20_looplimiter2 = 0;
  for(int GLF_live20i = GLF_live20from; GLF_live20i <= GLF_live20to; GLF_live20i ++)
   {
    if(GLF_live20_looplimiter2 >= 7)
     {
      break;
     }
    GLF_live20_looplimiter2 ++;
    GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)];
   }
 }
}
precision highp float;

precision highp int;

precision highp int;

precision highp float;

mediump vec4 GLF_live17gl_FragCoord = _GLF_FUZZED(vec4(-0.1, -381.527, -2.6, -43.37));

vec4 GLF_live17_GLF_color = _GLF_FUZZED((vec4(6.3, -6760.4065, -6.1, 70.04) / vec4(-47.68, 3.7, -0.6, 4191.2215)));

precision highp float;

mediump vec4 GLF_live16gl_FragCoord = _GLF_FUZZED(vec4(-623.758, 3107.2579, -5.1, 4057.0510));

vec4 GLF_live16_GLF_color = _GLF_FUZZED((vec4(542.122, -6.6, -570.764, 361.765) * vec4(2594.2740, 2.3, -331.184, -9.8)));

layout(set = 0, binding = 1) uniform sampler2D GLF_live16tex;

precision highp float;

mediump vec4 GLF_live18gl_FragCoord = _GLF_FUZZED(vec4(8470.7309, -11.76, -28.91, 2.4));

vec4 GLF_live18_GLF_color = _GLF_FUZZED(vec4(vec3(-9.5, -6.8, -1.3), -9447.8271));

layout(set = 0, binding = 2) uniform sampler2D GLF_live18tex;

precision highp float;

precision highp int;

const int GLF_live15dp[256] = int[256](115, 133, 150, 164, 176, 184, 190, 192, 191, 187, _GLF_IDENTITY(181, (_GLF_IDENTITY(181, clamp(_GLF_IDENTITY(181, clamp(181, 181, 181)), 181, _GLF_IDENTITY(181, (181) - 0)))) - 0), 172, 163, 153, 143, _GLF_IDENTITY(134, (134) << 0), 126, _GLF_IDENTITY(120, 0 ^ (120)), 116, 114, 114, 117, 121, 127, 134, 141, 148, 154, 159, 162, 163, 161, 157, 151, 143, 134, 124, 113, 103, 94, 87, 82, 79, 80, 84, 91, 101, 114, 130, 146, 164, 182, 199, 215, 229, 240, 249, 254, 256, 254, 250, 243, 233, 223, 212, 200, 190, 180, 172, 166, 163, 161, 162, 164, 169, 174, 179, 185, 190, 193, 195, 195, 192, 188, 180, 171, 161, 149, 137, 125, 114, 105, 97, 93, 91, 93, 98, 106, 117, 130, 145, _GLF_IDENTITY(161, clamp(161, 161, 161)), 177, 193, 208, 221, 231, 239, 243, 244, _GLF_IDENTITY(242, (242) | 0), 236, 228, 218, 207, 194, 181, 169, 158, 148, 141, 135, 132, 131, 132, 135, 138, _GLF_IDENTITY(143, (_GLF_IDENTITY(143, (false ? _GLF_FUZZED(-77204) : 143))) ^ 0), 147, 151, 154, 155, 155, 152, 146, 139, 129, 118, 106, 93, 80, 68, 58, 49, _GLF_IDENTITY(43, (43) | (43)), 40, 41, 44, 51, 61, 73, 87, 103, 119, 134, 149, 162, 173, 181, 186, 188, 186, 181, 174, 164, 153, 141, 128, 116, 104, 94, 86, 81, 77, 76, 77, 80, 84, 89, 94, 98, 102, 104, 104, 102, 98, 92, 83, 73, 62, 50, 38, 26, 16, 8, 2, 0, 0, 4, 11, 21, 33, 48, 64, 81, 98, 114, 129, 141, 151, 158, 161, 161, 158, 152, 144, 134, 123, 112, 100, 90, 81, 73, 68, 65, 65, 67, 70, 75, 81, 87, 92, 97, 101, 103, 102, 100, 95, 88, 79, _GLF_IDENTITY(69, max(_GLF_IDENTITY(69, 0 ^ (69)), 69)), 58, 47, 36, 26, 18, 13, 11, 11, 15, 22, 32, 45, 60, 77, 94);

precision highp float;

layout(set = 0, binding = 3) uniform sampler2D GLF_live13tex;

precision highp float;

mediump vec4 GLF_live14gl_FragCoord = _GLF_FUZZED(vec4(1.3, 0.1, -947.028, _GLF_IDENTITY(-344.101, mix(float(_GLF_IDENTITY(-344.101, float(_GLF_IDENTITY(mat3(-344.101, 0.0, 0.0, 1.0, 0.0, 1.0, sqrt(0.0), 1.0, 0.0), (_GLF_IDENTITY(false ? _GLF_FUZZED(mat3(-614.493, 74.85, 48.30, 32.41, 5141.7168, 6.9, 9798.5552, _GLF_IDENTITY(-35.87, clamp(_GLF_IDENTITY(-35.87, (-35.87) + 0.0), -35.87, -35.87)), 6.6)) : mat3(-344.101, 0.0, 0.0, 1.0, 0.0, 1.0, _GLF_IDENTITY(sqrt(0.0), min(sqrt(0.0), _GLF_IDENTITY(sqrt(0.0), float(_GLF_IDENTITY(mat3(sqrt(0.0), exp(0.0), 0.0, cos(0.0), 1.0, 0.0, 0.0, 1.0, 1.0), (mat3(sqrt(0.0), exp(0.0), 0.0, cos(0.0), 1.0, 0.0, 0.0, 1.0, 1.0)) / mat3(1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0)))))), 1.0, 0.0), (true ? false ? _GLF_FUZZED(mat3(-614.493, 74.85, 48.30, 32.41, 5141.7168, 6.9, 9798.5552, _GLF_IDENTITY(-35.87, clamp(_GLF_IDENTITY(-35.87, (-35.87) + 0.0), -35.87, -35.87)), 6.6)) : mat3(-344.101, 0.0, 0.0, 1.0, 0.0, 1.0, _GLF_IDENTITY(sqrt(0.0), min(sqrt(0.0), _GLF_IDENTITY(sqrt(0.0), float(_GLF_IDENTITY(mat3(sqrt(0.0), exp(0.0), 0.0, cos(0.0), 1.0, 0.0, 0.0, 1.0, 1.0), (mat3(sqrt(0.0), exp(0.0), 0.0, cos(0.0), 1.0, 0.0, 0.0, 1.0, 1.0)) / mat3(1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0)))))), 1.0, 0.0) : _GLF_FUZZED(mat3(-9.1, -4.2, -1109.2055, 4.5, 5.0, -21.82, -652.967, 5427.5225, 81.35))))))))), float(_GLF_FUZZED(vec3(9572.4296, 77.41, _GLF_IDENTITY(-496.418, max(-496.418, _GLF_IDENTITY(-496.418, float(mat4x2(-496.418, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0)))))).z)), bool(false)))));

vec4 GLF_live14_GLF_color = _GLF_FUZZED(vec4(vec2(-7.0, -7.1), 5940.0201, 1683.7836));

layout(set = 0, binding = 4) uniform sampler2D GLF_live14tex;

float GLF_live14ReallyApproxNormalizedAtan2(vec2 GLF_live14v)
{
 {
  {
   GLF_live16_GLF_color = texture(GLF_live16tex, GLF_live16gl_FragCoord.xy * (1.0 / 256.0));
  }
 }
 float GLF_live14pi2 = 1.0 / (355.0 / _GLF_IDENTITY(113.0, max(_GLF_IDENTITY(113.0, min(113.0, 113.0)), _GLF_IDENTITY(113.0, mix(float(_GLF_FUZZED(110.038)), float(113.0), bool(true))))));
 if(length(GLF_live14v) < 0.001)
  {
   return 0.0;
  }
 vec2 GLF_live14a = abs(GLF_live14v);
 float GLF_live14z = _GLF_FUZZED(min(-22.61, GLF_live14a[0]));
 if(GLF_live14a.y > GLF_live14a.x)
  {
   GLF_live14z = GLF_live14a.x / GLF_live14a.y;
  }
 else
  {
   {
    int GLF_live20_looplimiter3 = 0;
    int GLF_live20high = _GLF_FUZZED(-17374);
    int GLF_live20m = _GLF_FUZZED(-23390);
    int GLF_live20i = _GLF_FUZZED(-5018);
    {
     if(GLF_live20_looplimiter3 >= 7)
      {
       1;
      }
     GLF_live20_looplimiter3 ++;
     int GLF_live20from = GLF_live20i;
     int GLF_live20mid = GLF_live20i + GLF_live20m - 1;
     int GLF_live20to = min(GLF_live20i + 2 * GLF_live20m - 1, GLF_live20high);
     GLF_live20merge(GLF_live20from, GLF_live20mid, GLF_live20to);
    }
   }
   GLF_live14z = GLF_live14a.y / GLF_live14a.x;
  }
 float GLF_live14th = (0.97 - 0.19 * GLF_live14z * GLF_live14z) * GLF_live14z * GLF_live14pi2;
 if(GLF_live14a.y < GLF_live14a.x)
  {
   _GLF_IDENTITY(GLF_live14th = 0.5 - GLF_live14th, (GLF_live14th = 0.5 - GLF_live14th) + 0.0);
  }
 if(_GLF_IDENTITY(GLF_live14v.x, float(_GLF_IDENTITY(mat4x2(_GLF_IDENTITY(GLF_live14v, (_GLF_IDENTITY(GLF_live14v, (false ? _GLF_FUZZED(injectionSwitch) : GLF_live14v))) / vec2(1.0, 1.0)).x, log(1.0), 1.0, 0.0, _GLF_IDENTITY(dot(vec2(0.0, length(vec4(0.0, 0.0, 0.0, 0.0))), vec2(1.0, 1.0)), _GLF_IDENTITY(dot(vec2(0.0, length(vec4(0.0, 0.0, 0.0, 0.0))), vec2(1.0, 1.0)), mix(float(_GLF_FUZZED(-9.4)), float(dot(vec2(0.0, length(vec4(0.0, 0.0, 0.0, 0.0))), vec2(1.0, 1.0))), _GLF_IDENTITY(bool(true), (_GLF_IDENTITY(bool(true), false || (bool(true)))) && true)))), 1.0, 0.0, 1.0), mat4x2(mat4x2(mat4x2(GLF_live14v.x, log(1.0), 1.0, 0.0, _GLF_IDENTITY(dot(vec2(0.0, length(vec4(0.0, 0.0, 0.0, 0.0))), vec2(1.0, 1.0)), _GLF_IDENTITY(dot(_GLF_IDENTITY(vec2(0.0, length(vec4(0.0, 0.0, 0.0, 0.0))), min(vec2(0.0, length(vec4(0.0, 0.0, 0.0, 0.0))), vec2(0.0, length(vec4(0.0, 0.0, 0.0, 0.0))))), vec2(1.0, 1.0)), mix(float(_GLF_FUZZED(-9.4)), float(dot(vec2(0.0, length(vec4(0.0, 0.0, 0.0, 0.0))), vec2(1.0, 1.0))), bool(true)))), 1.0, 0.0, 1.0)))))) < 0.0)
  {
   GLF_live14th = 1.0 - GLF_live14th;
   {
    float GLF_live20grey = _GLF_FUZZED(-2.0);
    if(int(GLF_live20gl_FragCoord[1]) < 270)
     {
      GLF_live20grey = 0.5 + float(GLF_live20data[8]) / 10.0;
     }
    else
     {
      1;
     }
   }
  }
 if(GLF_live14v.y < 0.0)
  {
   _GLF_IDENTITY(GLF_live14th = - GLF_live14th, 0.0 + (GLF_live14th = - GLF_live14th));
   {
    {
     GLF_live16_GLF_color = texture(GLF_live16tex, GLF_live16gl_FragCoord.xy * (1.0 / 256.0));
    }
   }
  }
 {
  vec2 GLF_live17coord = _GLF_FUZZED(vec2(-8170.2559, -864.375));
  if(GLF_live17coord.y < 0.6)
   {
    uvec2 GLF_live17icoord = uvec2(((GLF_live17coord - vec2(0.4, 0.0)) * vec2(1.0 / 0.4, _GLF_IDENTITY(1.0, (true ? _GLF_IDENTITY(1.0, max(1.0, 1.0)) : _GLF_FUZZED(distance(vec3(6295.5248, 8.4, -3806.2699), vec3(-310.848, -8.7, 7.1))))) / 0.6)) * 256.0);
    uint GLF_live17res1 = uint(((GLF_live17icoord.x * GLF_live17icoord.y) >> (GLF_live17icoord.x & 31u)) & 0xffffffffu);
    uint GLF_live17res2 = uint(_GLF_IDENTITY(((GLF_live17icoord.x * GLF_live17icoord.y) << (GLF_live17icoord.x & 31u)) & 0xffffffffu, 0u + (_GLF_IDENTITY(((GLF_live17icoord.x * GLF_live17icoord.y) << (GLF_live17icoord.x & 31u)) & 0xffffffffu, (((GLF_live17icoord.x * GLF_live17icoord.y) << (GLF_live17icoord.x & 31u)) & 0xffffffffu) / 1u))));
    float GLF_live17res = float(((GLF_live17res2 & 0x80000000u) != 0u ? 1u : 0u) ^ ((GLF_live17res1 & 1u) != 0u ? 1u : _GLF_IDENTITY(0u, _GLF_IDENTITY(uint(uvec4(_GLF_IDENTITY(0u, uint(uint(0u))), 0u, 0u, 1u)), (uint(uvec4(_GLF_IDENTITY(0u, uint(uint(0u))), 0u, 0u, 1u))) >> 0u))));
    GLF_live17_GLF_color = vec4(GLF_live17res, GLF_live17res, GLF_live17res, 1.0);
   }
  else
   {
    ivec2 GLF_live17icoord = ivec2(((GLF_live17coord - vec2(0.4, _GLF_IDENTITY(0.6, clamp(0.6, 0.6, 0.6)))) * vec2(1.0 / 0.4, _GLF_IDENTITY(1.0 / 0.4, float(vec2(1.0 / 0.4, 1.0))))) * 256.0);
    int GLF_live17res3 = ((GLF_live17icoord.x >> 5) & 1) ^ ((GLF_live17icoord.y & 32) >> 5);
    int GLF_live17res2 = (GLF_live17icoord.y * GLF_live17icoord.y >> 10) & 1;
    int GLF_live17res1 = (GLF_live17icoord.x * GLF_live17icoord.y >> 9) & 1;
    GLF_live17_GLF_color = vec4(float(GLF_live17res1 ^ GLF_live17res2), float(GLF_live17res2 & GLF_live17res3), float(GLF_live17res1 | GLF_live17res3), 1.0);
   }
 }
 return GLF_live14th;
 {
  {
   vec3 GLF_live18texel = texture(GLF_live18tex, GLF_live18gl_FragCoord.xy * (1.0 / 256.0)).xyz;
   vec2 GLF_live18reuse = (GLF_live18texel.xz + GLF_live18texel.yy) * 0.5 + vec2(0.25, 0.25);
   _GLF_IDENTITY(GLF_live18reuse = floor(GLF_live18reuse * 256.0) / 256.0, (true ? _GLF_IDENTITY(GLF_live18reuse = floor(GLF_live18reuse * 256.0) / 256.0, (GLF_live18reuse = floor(GLF_live18reuse * 256.0) / 256.0) * vec2(1.0, 1.0)) : _GLF_FUZZED(GLF_live18reuse)));
   GLF_live18_GLF_color = texture(GLF_live18tex, GLF_live18reuse);
  }
 }
}
vec2 GLF_live14polarize(vec2 GLF_live14coord)
{
 {
  vec2 GLF_live17coord = _GLF_FUZZED(vec2(397.520, 3.8));
  {
   if(GLF_live17coord.y < 0.6)
    {
     uvec2 GLF_live17icoord = uvec2(((GLF_live17coord - vec2(0.4, 0.0)) * vec2(1.0 / 0.4, 1.0 / 0.6)) * 256.0);
     uint GLF_live17res1 = uint(((GLF_live17icoord.x * GLF_live17icoord.y) >> (GLF_live17icoord.x & 31u)) & 0xffffffffu);
     uint GLF_live17res2 = uint(((GLF_live17icoord.x * GLF_live17icoord.y) << (GLF_live17icoord.x & 31u)) & 0xffffffffu);
     float GLF_live17res = float(((GLF_live17res2 & 0x80000000u) != 0u ? 1u : 0u) ^ ((GLF_live17res1 & 1u) != 0u ? 1u : 0u));
     GLF_live17_GLF_color = vec4(GLF_live17res, GLF_live17res, GLF_live17res, 1.0);
    }
   else
    {
     {
      float GLF_live20grey = _GLF_FUZZED((-3463.1537));
      if(int(GLF_live20gl_FragCoord[1]) < 210)
       {
        GLF_live20grey = 0.5 + float(GLF_live20data[6]) / 10.0;
       }
      else
       {
        if(int(GLF_live20gl_FragCoord[1]) < 240)
         {
          GLF_live20grey = 0.5 + float(GLF_live20data[7]) / 10.0;
         }
        else
         {
          if(int(GLF_live20gl_FragCoord[1]) < 270)
           {
            GLF_live20grey = 0.5 + float(GLF_live20data[8]) / 10.0;
           }
          else
           {
            1;
           }
         }
       }
     }
     ivec2 GLF_live17icoord = ivec2(((GLF_live17coord - vec2(0.4, 0.6)) * vec2(1.0 / 0.4, 1.0 / 0.4)) * 256.0);
     int GLF_live17res3 = ((GLF_live17icoord.x >> 5) & 1) ^ ((GLF_live17icoord.y & 32) >> 5);
     int GLF_live17res2 = (GLF_live17icoord.y * GLF_live17icoord.y >> 10) & 1;
     {
      int GLF_live20_looplimiter3 = 0;
      if(GLF_live20_looplimiter3 >= 7)
       {
        1;
       }
     }
     int GLF_live17res1 = (GLF_live17icoord.x * GLF_live17icoord.y >> 9) & 1;
     GLF_live17_GLF_color = vec4(float(GLF_live17res1 ^ GLF_live17res2), float(GLF_live17res2 & GLF_live17res3), float(GLF_live17res1 | GLF_live17res3), 1.0);
    }
  }
 }
 float GLF_live14pi = (355.0 / 113.0);
 vec2 GLF_live14center = GLF_live14coord - vec2(0.5);
 float GLF_live14dist = length(GLF_live14center);
 {
  vec2 GLF_live17coord = _GLF_FUZZED(vec2(-0.8, -1.3));
  {
   uvec2 GLF_live17icoord = uvec2(((GLF_live17coord - vec2(0.4, _GLF_IDENTITY(0.0, (true ? 0.0 : _GLF_FUZZED(float(-46451)))))) * vec2(1.0 / 0.4, 1.0 / 0.6)) * 256.0);
   {
    int GLF_live20_looplimiter6 = 0;
    for(int GLF_live20j = 0; GLF_live20j < 10; GLF_live20j ++)
     {
      if(GLF_live20_looplimiter6 >= 7)
       {
        break;
       }
      GLF_live20_looplimiter6 ++;
      GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20j, 10)] = GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20j, 10)];
     }
   }
   uint GLF_live17res1 = uint(((GLF_live17icoord.x * GLF_live17icoord.y) >> (GLF_live17icoord.x & 31u)) & 0xffffffffu);
   uint GLF_live17res2 = uint(((GLF_live17icoord.x * GLF_live17icoord.y) << (GLF_live17icoord.x & 31u)) & 0xffffffffu);
   float GLF_live17res = float((_GLF_IDENTITY((GLF_live17res2 & 0x80000000u) != 0u ? 1u : 0u, max(_GLF_IDENTITY((GLF_live17res2 & 0x80000000u) != 0u ? 1u : 0u, ((GLF_live17res2 & 0x80000000u) != 0u ? 1u : 0u) - 0u), (GLF_live17res2 & 0x80000000u) != 0u ? 1u : 0u))) ^ ((GLF_live17res1 & 1u) != 0u ? 1u : 0u));
   {
    int GLF_live20_looplimiter3 = 0;
    int GLF_live20low = _GLF_FUZZED(-87319);
    int GLF_live20high = _GLF_FUZZED((-92639 / 30754));
    int GLF_live20m = _GLF_FUZZED(63213);
    for(int GLF_live20i = GLF_live20low; GLF_live20i < GLF_live20high; GLF_live20i += 2 * GLF_live20m)
     {
      if(GLF_live20_looplimiter3 >= 7)
       {
        break;
       }
      GLF_live20_looplimiter3 ++;
      int GLF_live20from = GLF_live20i;
      int GLF_live20mid = GLF_live20i + GLF_live20m - 1;
      int GLF_live20to = min(GLF_live20i + 2 * GLF_live20m - 1, GLF_live20high);
      GLF_live20merge(GLF_live20from, GLF_live20mid, GLF_live20to);
     }
   }
   GLF_live17_GLF_color = vec4(GLF_live17res, GLF_live17res, GLF_live17res, 1.0);
  }
 }
 float GLF_live14angle = GLF_live14ReallyApproxNormalizedAtan2(GLF_live14center);
 {
  vec2 GLF_live17coord = _GLF_FUZZED((mat3x2(2.7, 3449.4802, _GLF_IDENTITY(7.2, mix(float(7.2), float(_GLF_FUZZED(4.4)), bool(false))), -6.0, -2133.4034, -9.7) * vec3(-2189.7630, -6202.5917, -5055.4201)));
  if(GLF_live17coord.y < 0.6)
   {
    {
     int GLF_live20_looplimiter6 = 0;
     for(int GLF_live20j = 0; GLF_live20j < 10; GLF_live20j ++)
      {
       if(GLF_live20_looplimiter6 >= 7)
        {
         break;
        }
       GLF_live20_looplimiter6 ++;
       GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20j, 10)] = GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20j, 10)];
      }
    }
    uvec2 GLF_live17icoord = uvec2(_GLF_IDENTITY(((GLF_live17coord - vec2(0.4, 0.0)) * vec2(1.0 / 0.4, 1.0 / 0.6)) * 256.0, (((GLF_live17coord - vec2(0.4, 0.0)) * vec2(1.0 / 0.4, 1.0 / 0.6)) * 256.0) + vec2(_GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x))));
    uint GLF_live17res1 = uint(((GLF_live17icoord.x * GLF_live17icoord.y) >> (GLF_live17icoord.x & 31u)) & 0xffffffffu);
    uint GLF_live17res2 = uint(((GLF_live17icoord.x * GLF_live17icoord.y) << (GLF_live17icoord.x & 31u)) & 0xffffffffu);
    float GLF_live17res = float(((GLF_live17res2 & 0x80000000u) != 0u ? 1u : 0u) ^ ((GLF_live17res1 & 1u) != 0u ? 1u : 0u));
    GLF_live17_GLF_color = vec4(GLF_live17res, GLF_live17res, GLF_live17res, 1.0);
   }
  else
   {
    ivec2 GLF_live17icoord = ivec2(((GLF_live17coord - vec2(0.4, 0.6)) * vec2(1.0 / 0.4, 1.0 / 0.4)) * 256.0);
    int GLF_live17res3 = ((GLF_live17icoord.x >> 5) & 1) ^ ((GLF_live17icoord.y & 32) >> 5);
    int GLF_live17res2 = (_GLF_IDENTITY(GLF_live17icoord.y * GLF_live17icoord.y >> 10, (GLF_live17icoord.y * GLF_live17icoord.y >> 10) >> (0 | 0))) & 1;
    int GLF_live17res1 = (GLF_live17icoord.x * GLF_live17icoord.y >> 9) & 1;
    GLF_live17_GLF_color = vec4(float(GLF_live17res1 ^ GLF_live17res2), float(GLF_live17res2 & GLF_live17res3), float(GLF_live17res1 | GLF_live17res3), 1.0);
   }
 }
 return vec2(_GLF_IDENTITY(GLF_live14dist, clamp(_GLF_IDENTITY(GLF_live14dist, min(GLF_live14dist, GLF_live14dist)), GLF_live14dist, GLF_live14dist)), GLF_live14angle);
}
precision highp float;

precision highp int;

mediump vec4 GLF_live12gl_FragCoord = _GLF_FUZZED((vec4(7.8, 6151.2913, 4.3, -58.34) * 9.1));

vec4 GLF_live12_GLF_color = _GLF_FUZZED(vec4(-28.83, 78.47, -1.9, -3.0));

layout(set = 0, binding = 5) uniform buf5 {
 vec2 GLF_live12resolution;
};
float GLF_live12cross2d(vec2 GLF_live12a, vec2 GLF_live12b)
{
 return ((GLF_live12a.x) * (GLF_live12b.y) - (GLF_live12b.x) * (GLF_live12a.y));
}
int GLF_live12pointInTriangle(vec2 GLF_live12p, vec2 GLF_live12a, vec2 GLF_live12b, vec2 GLF_live12c)
{
 float GLF_live12pab = GLF_live12cross2d(vec2(GLF_live12p.x - _GLF_IDENTITY(GLF_live12a, (_GLF_FALSE(false, (gl_FragCoord.x < 0.0)) ? _GLF_FUZZED(mat2(-477.076, 23.35, -1695.4793, -314.105)[1]) : GLF_live12a)).x, GLF_live12p.y - GLF_live12a.y), vec2(_GLF_IDENTITY(GLF_live12b.x - GLF_live12a.x, mix(float(_GLF_FUZZED(9142.7783)), float(_GLF_IDENTITY(GLF_live12b.x - GLF_live12a.x, clamp(GLF_live12b.x - GLF_live12a.x, GLF_live12b.x - GLF_live12a.x, GLF_live12b.x - GLF_live12a.x))), bool(true))), GLF_live12b.y - GLF_live12a.y));
 float GLF_live12pbc = GLF_live12cross2d(vec2(GLF_live12p.x - GLF_live12b.x, GLF_live12p.y - GLF_live12b.y), vec2(GLF_live12c.x - GLF_live12b.x, GLF_live12c.y - GLF_live12b.y));
 if(! ((GLF_live12pab < 0.0 && GLF_live12pbc < 0.0) || (GLF_live12pab >= 0.0 && GLF_live12pbc >= 0.0)))
  {
   return 0;
  }
 float GLF_live12pca = GLF_live12cross2d(vec2(GLF_live12p.x - _GLF_IDENTITY(GLF_live12c, min(_GLF_IDENTITY(GLF_live12c, _GLF_IDENTITY(vec2(mat3(GLF_live12c, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0)), clamp(vec2(mat3(GLF_live12c, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0)), vec2(mat3(GLF_live12c, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0)), vec2(mat3(GLF_live12c, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0))))), GLF_live12c)).x, GLF_live12p.y - GLF_live12c.y), vec2(GLF_live12a.x - GLF_live12c.x, GLF_live12a.y - GLF_live12c.y));
 if(! ((GLF_live12pab < 0.0 && GLF_live12pca < 0.0) || (GLF_live12pab >= 0.0 && GLF_live12pca >= 0.0)))
  {
   return 0;
  }
 return 1;
}
precision highp float;

precision highp int;

struct GLF_live10BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

GLF_live10BST GLF_live10tree[10] = _GLF_FUZZED(GLF_live10BST[10](GLF_live10BST(-67566, -87435, 27390), GLF_live10BST(87526, -80682, 28087), GLF_live10BST(-84492, 64881, -60382), GLF_live10BST(-46105, 45280, -80019), GLF_live10BST(-6636, 44406, 78953), GLF_live10BST(-76334, 5352, -36549), GLF_live10BST((- -83579), 49788, -26814), GLF_live10BST(6354, -51910, _GLF_IDENTITY(35431, int(ivec2(_GLF_IDENTITY(35431, max(35431, 35431)), 1)))), GLF_live10BST((_GLF_IDENTITY(-61363, ~ (~ (-61363))) % -66443), 10400, 69890), GLF_live10BST(43485, -77403, -6348)));

precision highp float;

precision highp int;

vec4 GLF_live8_GLF_color = _GLF_FUZZED(vec4(21.04, 908.034, -940.801, -7.6));

int GLF_live8map[256] = _GLF_FUZZED(int[256](77871, 40700, (80220 % 36463), -35328, 7205, 28267, 23369, ((-78832 * -5919) * 85978), (-93100), -31135, 72705, -21718, 43639, (33973 + -14155), 25173, 60180, 35678, -62984, -79149, 20269, 35678, (-93100), 77871, 40700, 25173, _GLF_IDENTITY((33973 + -14155), 1 * ((33973 + -14155))), (80220 % 36463), -21718, 23369, _GLF_IDENTITY(20269, clamp(20269, 20269, 20269)), ((-78832 * -5919) * 85978), 60180, -79149, -62984, 43639, 72705, 7205, 28267, -35328, -31135, -35328, (33973 + -14155), ((-78832 * -5919) * 85978), -21718, -31135, -79149, -62984, 35678, 43639, _GLF_IDENTITY(7205, (7205) / 1), 40700, 28267, 23369, (_GLF_IDENTITY(-93100, 0 + (-93100))), 72705, 20269, 60180, (80220 % 36463), 25173, 77871, 40700, 28267, 20269, -35328, 25173, 35678, (33973 + -14155), (80220 % 36463), 43639, (-93100), _GLF_IDENTITY(-31135, (_GLF_IDENTITY(-31135, min(-31135, -31135))) / (1 & 1)), 23369, -79149, ((-78832 * -5919) * 85978), 60180, 7205, -21718, 72705, -62984, 77871, 7205, 77871, _GLF_IDENTITY(-35328, ~ (~ (_GLF_IDENTITY(-35328, clamp(_GLF_IDENTITY(-35328, min(_GLF_IDENTITY(-35328, (-35328) | (_GLF_IDENTITY(-35328, ~ (~ (-35328))))), -35328)), -35328, -35328))))), (-93100), -62984, ((-78832 * -5919) * 85978), -79149, 20269, 35678, 72705, (33973 + -14155), -31135, 28267, 25173, 23369, (_GLF_IDENTITY(80220, max(80220, 80220)) % 36463), 60180, -21718, 40700, 43639, (33973 + -14155), 40700, -79149, (-93100), 43639, 20269, 23369, (80220 % _GLF_IDENTITY(36463, (36463) - 0)), -62984, 72705, -31135, 7205, -35328, 77871, 28267, ((_GLF_IDENTITY(-78832 * -5919, (_GLF_IDENTITY(-78832 * -5919, (42295 & 0) | (_GLF_IDENTITY(-78832 * -5919, (true ? -78832 * -5919 : _GLF_FUZZED(-80061)))))) | (-78832 * -5919))) * 85978), 60180, 25173, 35678, -21718, -35328, 25173, 35678, 23369, 60180, (-93100), (33973 + -14155), 77871, 72705, -31135, -62984, 40700, 43639, (_GLF_IDENTITY(80220 % 36463, 0 | (80220 % 36463))), 7205, 20269, -21718, -79149, ((-78832 * -5919) * 85978), 28267, 23369, -21718, 20269, 60180, 25173, 72705, ((_GLF_IDENTITY(-78832 * -5919, clamp(_GLF_IDENTITY(-78832 * -5919, (true ? -78832 * -5919 : _GLF_FUZZED(-71308))), -78832 * -5919, -78832 * -5919))) * 85978), 40700, (-93100), -35328, -62984, -79149, -31135, 7205, 28267, (33973 + -14155), _GLF_IDENTITY(77871, (77871) | (77871)), 43639, (80220 % 36463), _GLF_IDENTITY(35678, (_GLF_IDENTITY(35678, (0 | 0) | (35678))) ^ 0), 35678, 72705, (33973 + -14155), 40700, 25173, (-93100), 77871, -31135, (_GLF_IDENTITY((-78832 * -5919) * _GLF_IDENTITY(85978, max(85978, 85978)), clamp(_GLF_IDENTITY((-78832 * -5919) * 85978, (true ? (-78832 * -5919) * 85978 : _GLF_FUZZED(-77259))), _GLF_IDENTITY((-78832 * -5919) * 85978, (true ? (-78832 * -5919) * 85978 : _GLF_FUZZED(-20249))), (-78832 * -5919) * 85978))), -79149, 28267, (80220 % 36463), -35328, 43639, 60180, -62984, 7205, 23369, -21718, 20269, 43639, 35678, (-93100), -31135, (80220 % 36463), 40700, -35328, 25173, 77871, 23369, ((-78832 * -5919) * 85978), 60180, _GLF_IDENTITY(-21718, clamp(-21718, -21718, -21718)), _GLF_IDENTITY(-62984, (-62984) | (_GLF_IDENTITY(-62984, (-62984) * 1))), 28267, 20269, (_GLF_IDENTITY(33973 + -14155, max(33973 + -14155, 33973 + -14155))), 72705, -79149, _GLF_IDENTITY(7205, (7205) >> 0), -21718, ((-78832 * -5919) * 85978), 60180, (-93100), 40700, 72705, (80220 % 36463), 43639, -62984, _GLF_IDENTITY(-31135, (_GLF_IDENTITY(-31135, clamp(-31135, _GLF_IDENTITY(-31135, (-31135) / 1), -31135))) | 0), 77871, 25173, 20269, 28267, 35678, _GLF_IDENTITY(7205, (7205) << 0), -79149, 23369, -35328, (33973 + -14155), -31135, 77871, 60180, -62984, 23369, (_GLF_IDENTITY(33973 + -14155, (true ? 33973 + -14155 : _GLF_FUZZED((- (82276 * 74551)))))), 25173, (-93100), 40700, 7205, (80220 % 36463), -79149, ((-78832 * -5919) * 85978), 43639, 28267, 72705, -21718, 35678, -35328, 20269, 35678, 60180, -31135, 25173, (80220 % 36463), (33973 + -14155), 40700, (_GLF_IDENTITY(-93100, 0 | (-93100))), ((-78832 * -5919) * 85978), -79149, -35328, 77871, -21718, -62984, 72705, 28267));

precision highp float;

precision highp int;

precision highp float;

layout(set = 0, binding = 6) uniform sampler2D GLF_live9tex;

const float GLF_live9weights[9] = float[9](1.0, 0.5, - 0.25, 0.5, 1.0, - 0.5, - 0.25, - 0.5, - 1.0);

precision highp float;

precision highp int;

precision highp float;

precision highp int;

precision highp float;

precision highp float;

layout(set = 0, binding = 7) uniform sampler2D GLF_live6tex;

precision highp float;

precision highp int;

struct GLF_live3QuicksortObject {
 int numbers[10];
} ;

GLF_live3QuicksortObject GLF_live3obj = _GLF_FUZZED(GLF_live3QuicksortObject(int[10](-65346, 4377, 80606, 4218, -28423, 80066, _GLF_IDENTITY(31980, (_GLF_IDENTITY(31980, (31980) / 1)) | (_GLF_IDENTITY(31980, max(31980, _GLF_IDENTITY(31980, (31980) - 0))))), (87965 / -71415), 2590, 73379)));

precision highp float;

precision highp int;

const vec4 GLF_live2pal[16] = vec4[16](vec4(0.0, 0.0, 0.0, 1.0), vec4(0.5, 0.0, 0.0, 1.0), vec4(0.0, 0.5, 0.0, 1.0), vec4(0.5, 0.5, 0.0, 1.0), vec4(0.0, 0.0, 0.5, 1.0), vec4(0.5, 0.0, 0.5, 1.0), vec4(0.0, 0.5, 0.5, 1.0), vec4(0.5, 0.5, 0.5, 1.0), vec4(0.0, 0.0, 0.0, 1.0), vec4(1.0, 0.0, 0.0, _GLF_IDENTITY(_GLF_IDENTITY(1.0, (_GLF_IDENTITY(1.0, min(_GLF_IDENTITY(1.0, min(1.0, 1.0)), 1.0))) + 0.0), mix(_GLF_IDENTITY(float(_GLF_FUZZED(_GLF_IDENTITY(1.5, mix(float(_GLF_FUZZED(986.693)), float(1.5), bool(true))))), _GLF_IDENTITY(float(mat2x3(float(_GLF_FUZZED(_GLF_IDENTITY(1.5, mix(float(_GLF_FUZZED(986.693)), float(1.5), bool(true))))), 0.0, 1.0, 1.0, 0.0, 0.0)), (float(mat2x3(float(_GLF_FUZZED(_GLF_IDENTITY(1.5, mix(float(_GLF_FUZZED(986.693)), float(1.5), bool(true))))), 0.0, 1.0, 1.0, 0.0, 0.0))) - 0.0)), float(_GLF_IDENTITY(1.0, (_GLF_IDENTITY(1.0, min(_GLF_IDENTITY(1.0, min(1.0, 1.0)), 1.0))) + 0.0)), bool(true)))), vec4(0.0, 1.0, 0.0, 1.0), vec4(1.0, 1.0, 0.0, 1.0), vec4(0.0, 0.0, 1.0, 1.0), vec4(1.0, 0.0, 1.0, _GLF_IDENTITY(1.0, 0.0 + _GLF_IDENTITY((1.0), (false ? _GLF_FUZZED(-9.3) : (1.0))))), vec4(0.0, 1.0, 1.0, 1.0), _GLF_IDENTITY(vec4(1.0, 1.0, 1.0, 1.0), mix(vec4(_GLF_IDENTITY((vec4(1.0, 1.0, 1.0, 1.0))[0], max((vec4(1.0, 1.0, 1.0, 1.0))[0], (vec4(1.0, 1.0, 1.0, _GLF_IDENTITY(1.0, float(mat3(1.0, 0.0, 1.0, 1.0, 1.0, 0.0, _GLF_IDENTITY(dot(vec4(1.0, 0.0, 0.0, log(1.0)), vec4(exp(0.0), 0.0, 0.0, 0.0)), dot(vec4(1.0, 0.0, 0.0, log(1.0)), vec4(exp(0.0), 0.0, 0.0, 0.0))), 1.0, 0.0)))))[0])), _GLF_FUZZED(98.36), _GLF_FUZZED(8225.3591), _GLF_FUZZED(-42.82)), vec4(_GLF_FUZZED(1.9), (vec4(1.0, 1.0, 1.0, 1.0))[1], (vec4(1.0, 1.0, 1.0, 1.0))[2], (vec4(1.0, 1.0, 1.0, 1.0))[3]), bvec4(false, true, true, true))));

const vec4 GLF_live2picdata[8] = vec4[8](vec4(_GLF_IDENTITY(4, (4) << 0), 4, 20, 4), vec4(4, 4, 4, _GLF_IDENTITY(20, (20) | (20))), vec4(4, 20, 20, _GLF_IDENTITY(4, (4) * 1)), vec4(20, 4, 4, 8), vec4(8, 6, 4, 2), vec4(2, 12, 2, 4), vec4(16, 2, 4, 4), vec4(_GLF_IDENTITY(12, min(12, 12)), 22, 4, 4));

bool GLF_live2collision(vec2 GLF_live2pos, vec4 GLF_live2quad)
{
 if(GLF_live2pos.x < GLF_live2quad.x)
  {
   return false;
  }
 if(GLF_live2pos.y < GLF_live2quad.y)
  {
   return false;
  }
 {
  int GLF_live8i = _GLF_IDENTITY(_GLF_FUZZED(41910), (true ? _GLF_FUZZED(41910) : _GLF_FUZZED(88308)));
  int GLF_live8j = _GLF_FUZZED((~ 61737));
  bool GLF_live8canwalk = _GLF_FUZZED(true);
  ivec2 GLF_live8p = _GLF_FUZZED(ivec2(79310, 84067));
  {
   int GLF_live8_looplimiter1 = 0;
   for(   GLF_live8j = 0;
 _GLF_IDENTITY(GLF_live8j, int(ivec4(GLF_live8j, 1, 1, 0))) < 8; GLF_live8j ++)
    {
     if(GLF_live8_looplimiter1 >= 3)
      {
       break;
      }
     {
      {
       GLF_live12_GLF_color = vec4(0.0, 0.0, 0.0, 1.0);
      }
     }
     GLF_live8_looplimiter1 ++;
     if(GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT(GLF_live8j * 2 + GLF_live8i * 2 * 16, 256)] == 0)
      {
       GLF_live8p.x = GLF_live8j * 2;
       _GLF_IDENTITY(GLF_live8p.y = GLF_live8i * 2, (1 ^ 1) + (GLF_live8p.y = GLF_live8i * 2));
       GLF_live8canwalk = true;
      }
    }
  }
 }
 if(GLF_live2pos.x > GLF_live2quad.x + GLF_live2quad.z)
  {
   return false;
  }
 if(GLF_live2pos.y > GLF_live2quad.y + GLF_live2quad.w)
  {
   return false;
  }
 {
  {
   GLF_live16_GLF_color = texture(GLF_live16tex, GLF_live16gl_FragCoord.xy * (1.0 / 256.0));
  }
 }
 return true;
}
precision highp float;

precision highp int;

mediump vec4 GLF_live0gl_FragCoord = _GLF_FUZZED(vec4(8084.7008, -2.2, -4434.5698, -34.70));

vec4 GLF_live0_GLF_color = _GLF_FUZZED(_GLF_IDENTITY(vec4(-38.04, -5.3, -5.5, -0.8), (true ? vec4(-38.04, -5.3, -5.5, -0.8) : _GLF_FUZZED(vec4(74.96, 620.695, 8.6, -7098.0336)))));

layout(push_constant) uniform buf_push {
 vec2 GLF_live0resolution;
};
precision highp float;

precision highp float;

precision highp int;

mediump vec4 GLF_dead0gl_FragCoord = _GLF_FUZZED(vec4(-5.9, 0.3, 255.874, -202.123));

const int GLF_dead0N = 10;

int GLF_dead0data[10] = _GLF_FUZZED(int[10]((GLF_dead0N), 81320, (_GLF_IDENTITY(GLF_dead0N % 90459, ~ (_GLF_IDENTITY(~ (GLF_dead0N % 90459), _GLF_IDENTITY(0, (false ? _GLF_FUZZED(1743) : 0)) | (~ (GLF_dead0N % 90459)))))), int(-86.25), -75459, -46918, 29719, GLF_dead0N, 37712, 26392));

precision highp float;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 8) uniform sampler2D tex;

void main()
{
 {
  float GLF_live20grey = _GLF_FUZZED(-6729.2581);
  {
   GLF_live20grey = 0.5 + float(GLF_live20data[1]) / 10.0;
  }
 }
 {
  int GLF_live13i = _GLF_FUZZED(GLF_dead0N);
  vec2 GLF_live13coord = _GLF_FUZZED(vec2(7432.6342, 8452.6960));
  vec4 GLF_live13texel = _GLF_FUZZED((mat3x4(6.9, 0.2, 311.873, 4798.6738, _GLF_IDENTITY(-723.080, (false ? _GLF_FUZZED(-9.6) : _GLF_IDENTITY(-723.080, mix(float(-723.080), float(_GLF_FUZZED((-69.71 / -45.84))), bool(false))))), 978.354, -202.594, -78.67, 8468.2005, -7.4, 7.8, 8.6) * vec3(-28.89, 2120.2996, -19.80)));
  int GLF_live13_looplimiter0 = 0;
  while(GLF_live13texel.x + GLF_live13texel.y + GLF_live13texel.z > 1.0 && GLF_live13i < _GLF_IDENTITY(16, (16) | int(_GLF_ZERO(0.0, injectionSwitch.x))))
   {
    if(GLF_live13_looplimiter0 >= 4)
     {
      break;
     }
    {
     float GLF_live20grey = _GLF_FUZZED(21.61);
     if(int(GLF_live20gl_FragCoord[1]) < 270)
      {
       GLF_live20grey = 0.5 + float(GLF_live20data[8]) / 10.0;
      }
     else
      {
       1;
      }
    }
    GLF_live13_looplimiter0 ++;
    GLF_live13coord = GLF_live13texel.xz + GLF_live13texel.yy;
    GLF_live13coord = floor(GLF_live13coord * 256.0) / 256.0;
    GLF_live13texel = texture(GLF_live13tex, GLF_live13coord);
    GLF_live13i ++;
   }
 }
 int i = _GLF_IDENTITY(0, min(0, 0));
 vec2 coord = gl_FragCoord.xy * (1.0 / 256.0);
 vec4 texel = texture(tex, coord);
 while(_GLF_IDENTITY(_GLF_IDENTITY(texel.x + texel.y + texel.z > 1.0, bool(bool(texel.x + texel.y + texel.z > 1.0))), true && (_GLF_IDENTITY(texel.x + texel.y + texel.z > 1.0, bool(bool(_GLF_IDENTITY(texel, vec4(texel[0], _GLF_IDENTITY(texel[1], (true ? texel[1] : _GLF_FUZZED(length(_GLF_color)))), texel[2], texel[3])).x + texel.y + _GLF_IDENTITY(texel.z, (_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) ? texel.z : _GLF_FUZZED(697.885))) > 1.0))))) && i < 16)
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, float(mat2(injectionSwitch.y, 0.0, 1.0, 1.0)))))))
    discard;
   coord = texel.xz + texel.yy;
   coord = floor(coord * 256.0) / 256.0;
   texel = _GLF_IDENTITY(texture(tex, coord), min(_GLF_IDENTITY(texture(tex, coord), (texture(tex, coord)) * mat4(1.0)), texture(tex, coord)));
   i ++;
   if(_GLF_DEAD(false))
    {
     float donor_replacementGLF_dead0grey = _GLF_FUZZED(dot(cos(vec2(_GLF_IDENTITY(93.65, float(float(93.65))), -8.9)), vec2(-3.8, -24.31)));
     if(int(_GLF_IDENTITY(_GLF_IDENTITY(GLF_dead0gl_FragCoord, mix(vec4((GLF_dead0gl_FragCoord)[0], (GLF_dead0gl_FragCoord)[1], (GLF_dead0gl_FragCoord)[2], _GLF_FUZZED(4.7)), vec4(_GLF_FUZZED(-7817.2637), _GLF_FUZZED(0.5), _GLF_FUZZED((-731.778 / 2.8)), (GLF_dead0gl_FragCoord)[3]), bvec4(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), false, _GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), true))), (_GLF_IDENTITY(GLF_dead0gl_FragCoord, mix(vec4((GLF_dead0gl_FragCoord)[0], (GLF_dead0gl_FragCoord)[1], (GLF_dead0gl_FragCoord)[2], _GLF_FUZZED(4.7)), vec4(_GLF_FUZZED(-7817.2637), _GLF_FUZZED(0.5), _GLF_FUZZED((-731.778 / 2.8)), (GLF_dead0gl_FragCoord)[3]), bvec4(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), false, _GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), true)))) - vec4(0.0, 0.0, 0.0, 0.0))[1]) < 210)
      {
       {
        float GLF_live4z = _GLF_FUZZED(vec2(-8.4, 8.5).t);
        {
         int GLF_live9i = _GLF_FUZZED((GLF_dead0N / GLF_dead0N));
         {
          float GLF_live14th = _GLF_FUZZED(9.6);
          vec2 GLF_live14a = _GLF_FUZZED(vec2(-84.76, -824.338));
          if(GLF_live14a.y < GLF_live14a.x)
           {
            GLF_live14th = 0.5 - GLF_live14th;
           }
         }
         float GLF_live9uvstep = _GLF_FUZZED(-557.217);
         vec2 GLF_live9coord = _GLF_FUZZED(vec2(6.0, 14.87));
         vec4 GLF_live9res = _GLF_FUZZED((+ vec4(7.7, -0.1, 1.8, -5.4)));
         {
          int GLF_live9_looplimiter0 = 0;
          for(int GLF_live9j = 0; GLF_live9j < 3; GLF_live9j ++)
           {
            if(_GLF_IDENTITY(GLF_live9_looplimiter0, int(_GLF_IDENTITY(ivec3(GLF_live9_looplimiter0, 1, 0), ivec3(0, 0, 0) ^ (ivec3(_GLF_IDENTITY(GLF_live9_looplimiter0, 0 | (_GLF_IDENTITY(GLF_live9_looplimiter0, max(GLF_live9_looplimiter0, GLF_live9_looplimiter0)))), 1, 0))))) >= 4)
             {
              break;
              {
               float GLF_live20grey = _GLF_FUZZED(2.1);
               {
                GLF_live20grey = 0.5 + float(GLF_live20data[2]) / 10.0;
               }
              }
             }
            GLF_live9_looplimiter0 ++;
            GLF_live9res += texture(GLF_live9tex, GLF_live9coord + vec2(_GLF_IDENTITY(float(GLF_live9i - 1), mix(float(float(GLF_live9i - 1)), float(_GLF_FUZZED((-9274.1719 + 310.300))), bool(false))) * GLF_live9uvstep, float(GLF_live9j - 1) * GLF_live9uvstep)) * GLF_live9weights[_GLF_MAKE_IN_BOUNDS_INT(_GLF_IDENTITY(GLF_live9i, (GLF_live9i) | (_GLF_IDENTITY(GLF_live9i, max(GLF_live9i, GLF_live9i)))) * 3 + GLF_live9j, 9)];
            {
             {
              vec3 GLF_live18texel = texture(GLF_live18tex, GLF_live18gl_FragCoord.xy * (1.0 / 256.0)).xyz;
              {
               float GLF_live20grey = _GLF_FUZZED(-448.940);
               if(int(GLF_live20gl_FragCoord[1]) < 240)
                {
                 GLF_live20grey = 0.5 + float(GLF_live20data[7]) / 10.0;
                }
               else
                {
                 if(int(GLF_live20gl_FragCoord[1]) < 270)
                  {
                   GLF_live20grey = 0.5 + float(GLF_live20data[8]) / 10.0;
                  }
                 else
                  {
                   1;
                  }
                }
              }
              vec2 GLF_live18reuse = (GLF_live18texel.xz + GLF_live18texel.yy) * 0.5 + vec2(0.25, 0.25);
              GLF_live18reuse = floor(GLF_live18reuse * 256.0) / 256.0;
              GLF_live18_GLF_color = texture(GLF_live18tex, GLF_live18reuse);
             }
            }
           }
          {
           {
            GLF_live16_GLF_color = texture(GLF_live16tex, GLF_live16gl_FragCoord.xy * (1.0 / 256.0));
           }
          }
         }
        }
        vec2 GLF_live4a = _GLF_IDENTITY(_GLF_FUZZED(vec2(13.28, -38.05)), clamp(_GLF_FUZZED(_GLF_IDENTITY(vec2(13.28, -38.05), (vec2(13.28, -38.05)) * mat2(1.0))), _GLF_IDENTITY(_GLF_FUZZED(vec2(13.28, -38.05)), clamp(_GLF_FUZZED(vec2(13.28, -38.05)), _GLF_FUZZED(vec2(13.28, -38.05)), _GLF_FUZZED(vec2(13.28, -38.05)))), _GLF_FUZZED(vec2(13.28, -38.05))));
        {
         {
          {
           1;
          }
         }
         {
          vec2 GLF_live12pos = GLF_live12gl_FragCoord.xy / GLF_live12resolution;
          if(_GLF_IDENTITY(GLF_live12pointInTriangle(GLF_live12pos, vec2(0.7, 0.3), vec2(0.5, 0.9), vec2(0.1, 0.4)) == 1, ! (! (GLF_live12pointInTriangle(GLF_live12pos, vec2(0.7, 0.3), vec2(0.5, 0.9), vec2(0.1, 0.4)) == 1))))
           {
            GLF_live12_GLF_color = vec4(1.0, 0.0, 0.0, 1.0);
            {
             vec2 GLF_live17coord = _GLF_FUZZED(((vec2(2.3, 2954.7953) / -4445.4671) * vec2(5.7, -5.9)));
             {
              ivec2 GLF_live17icoord = ivec2(((GLF_live17coord - vec2(0.4, 0.0)) * vec2(1.0 / 0.6, 1.0)) * 256.0);
              int GLF_live17v = (GLF_live17icoord.x ^ GLF_live17icoord.y) * GLF_live17icoord.y;
              bool GLF_live17res1 = ((GLF_live17v >> 10) & 1) != 0;
              bool GLF_live17res2 = ((GLF_live17v >> 11) & 4) != 0;
              bool GLF_live17res3 = ((GLF_live17v >> 12) & 8) != 0;
              GLF_live17_GLF_color = vec4(GLF_live17res1 ? _GLF_IDENTITY(1.0, min(_GLF_IDENTITY(1.0, (false ? _GLF_FUZZED(-4.8) : _GLF_IDENTITY(1.0, float(mat4x3(1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0))))), 1.0)) : 0.0, GLF_live17res2 ? 1.0 : 0.0, GLF_live17res3 ? 1.0 : 0.0, 1);
             }
            }
           }
          else
           {
            GLF_live12_GLF_color = _GLF_IDENTITY(vec4(0.0, 0.0, 0.0, 1.0), (vec4(0.0, 0.0, 0.0, 1.0)) - vec4(0.0, 0.0, 0.0, 0.0));
            {
             {
              {
               int GLF_live20_looplimiter6 = 0;
               for(int GLF_live20j = 0; GLF_live20j < 10; GLF_live20j ++)
                {
                 if(GLF_live20_looplimiter6 >= 7)
                  {
                   break;
                  }
                 GLF_live20_looplimiter6 ++;
                 GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20j, 10)] = GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20j, 10)];
                }
              }
             }
             int GLF_live19count = _GLF_FUZZED(2767);
             int GLF_live19v = _GLF_FUZZED((GLF_dead0N << GLF_dead0N));
             {
              {
               int GLF_live20mid = _GLF_FUZZED(-94431);
               int GLF_live20i = _GLF_FUZZED(-52482);
               int GLF_live20k = _GLF_FUZZED(int(false));
               {
                int GLF_live20_looplimiter1 = 0;
                while(GLF_live20i < GLF_live20N && GLF_live20i <= GLF_live20mid)
                 {
                  if(GLF_live20_looplimiter1 >= 7)
                   {
                    break;
                   }
                  GLF_live20_looplimiter1 ++;
                  GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20k ++, 10)] = GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i ++, 10)];
                 }
               }
              }
              int GLF_live19_looplimiter0 = 0;
              while(GLF_live19v > 1)
               {
                if(GLF_live19_looplimiter0 >= 6)
                 {
                  break;
                 }
                GLF_live19_looplimiter0 ++;
                if((GLF_live19v & 1) == 1)
                 {
                  GLF_live19v = 3 * GLF_live19v + 1;
                 }
                else
                 {
                  GLF_live19v /= 2;
                 }
                GLF_live19count ++;
                {
                 int GLF_live20_looplimiter6 = 0;
                 if(GLF_live20_looplimiter6 >= 7)
                  {
                   1;
                  }
                }
               }
             }
            }
           }
         }
        }
        {
         GLF_live4z = _GLF_IDENTITY(GLF_live4a.y, min(_GLF_IDENTITY(GLF_live4a.y, mix(float(_GLF_FUZZED(2.0)), float(GLF_live4a.y), bool(true))), GLF_live4a.y)) / GLF_live4a.x;
        }
       }
       donor_replacementGLF_dead0grey = 0.5 + float(GLF_dead0data[6]) / 10.0;
      }
     else
      {
       if(int(GLF_dead0gl_FragCoord[1]) < 240)
        {
         {
          int GLF_live20low = _GLF_FUZZED(-25210);
          int GLF_live20high = _GLF_FUZZED(GLF_dead0N);
          int GLF_live20m = _GLF_FUZZED((true ? -85293 : GLF_dead0N));
          {
           int GLF_live20_looplimiter3 = 0;
           for(int GLF_live20i = GLF_live20low; GLF_live20i < GLF_live20high; GLF_live20i += 2 * GLF_live20m)
            {
             if(GLF_live20_looplimiter3 >= 7)
              {
               break;
              }
             GLF_live20_looplimiter3 ++;
             int GLF_live20from = GLF_live20i;
             int GLF_live20mid = GLF_live20i + GLF_live20m - 1;
             int GLF_live20to = min(GLF_live20i + 2 * GLF_live20m - 1, GLF_live20high);
             GLF_live20merge(GLF_live20from, GLF_live20mid, GLF_live20to);
            }
          }
         }
         donor_replacementGLF_dead0grey = 0.5 + float(GLF_dead0data[7]) / 10.0;
        }
       else
        {
         {
          float GLF_live20grey = _GLF_FUZZED(float(127724u));
          {
           if(int(GLF_live20gl_FragCoord[1]) < 180)
            {
             GLF_live20grey = 0.5 + float(GLF_live20data[5]) / 10.0;
            }
           else
            {
             if(int(GLF_live20gl_FragCoord[1]) < 210)
              {
               GLF_live20grey = 0.5 + float(GLF_live20data[6]) / 10.0;
              }
             else
              {
               if(int(GLF_live20gl_FragCoord[1]) < 240)
                {
                 GLF_live20grey = 0.5 + float(GLF_live20data[7]) / 10.0;
                }
               else
                {
                 if(int(GLF_live20gl_FragCoord[1]) < 270)
                  {
                   GLF_live20grey = 0.5 + float(GLF_live20data[8]) / 10.0;
                  }
                 else
                  {
                   1;
                  }
                }
              }
            }
          }
         }
         if(int(GLF_dead0gl_FragCoord[1]) < 270)
          {
           donor_replacementGLF_dead0grey = 0.5 + float(GLF_dead0data[8]) / 10.0;
           {
            {
             GLF_live16_GLF_color = texture(GLF_live16tex, GLF_live16gl_FragCoord.xy * (1.0 / 256.0));
            }
           }
          }
         else
          {
           {
            vec2 GLF_live2pos = _GLF_FUZZED(vec2(-3.0, 2.7));
            int GLF_live2i = _GLF_IDENTITY(_GLF_FUZZED((GLF_dead0N * ((950.387 == 3.6) ? _GLF_IDENTITY(GLF_dead0N, int(ivec4(GLF_dead0N, 1, 1, 0))) : int(101840u)))), 0 | (_GLF_FUZZED((GLF_dead0N * ((950.387 == 3.6) ? GLF_dead0N : int(101840u))))));
            vec4 GLF_live2res = _GLF_FUZZED((- vec4(vec2(-8.7, -294.997), -206.733, -3472.9235)));
            {
             int GLF_live2_looplimiter0 = 0;
             {
              {
               GLF_live16_GLF_color = texture(GLF_live16tex, GLF_live16gl_FragCoord.xy * (1.0 / 256.0));
              }
              {
               int GLF_live20_looplimiter6 = 0;
               int GLF_live20j = _GLF_FUZZED((75517 - -84019));
               {
                if(GLF_live20_looplimiter6 >= 7)
                 {
                  1;
                 }
                GLF_live20_looplimiter6 ++;
                GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20j, 10)] = GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20j, 10)];
               }
              }
             }
             for(             GLF_live2i = 0;
 GLF_live2i < 8; _GLF_IDENTITY(GLF_live2i ++, (_GLF_IDENTITY(GLF_live2i ++, (GLF_live2i ++) - 0)) << 0))
              {
               if(GLF_live2_looplimiter0 >= 6)
                {
                 {
                  {
                   int GLF_live20_looplimiter3 = 0;
                   int GLF_live20high = _GLF_FUZZED(GLF_dead0N);
                   int GLF_live20m = _GLF_FUZZED(GLF_dead0N);
                   int GLF_live20i = _GLF_FUZZED(GLF_dead0N);
                   {
                    if(GLF_live20_looplimiter3 >= 7)
                     {
                      1;
                     }
                    GLF_live20_looplimiter3 ++;
                    int GLF_live20from = GLF_live20i;
                    int GLF_live20mid = GLF_live20i + GLF_live20m - 1;
                    int GLF_live20to = min(GLF_live20i + 2 * GLF_live20m - 1, GLF_live20high);
                    GLF_live20merge(GLF_live20from, GLF_live20mid, GLF_live20to);
                   }
                  }
                  vec3 GLF_live5c = _GLF_FUZZED(vec3(1.0, 30.36, 9.0));
                  {
                   {
                    vec3 GLF_live18texel = texture(GLF_live18tex, GLF_live18gl_FragCoord.xy * (1.0 / 256.0)).xyz;
                    vec2 GLF_live18reuse = (GLF_live18texel.xz + GLF_live18texel.yy) * 0.5 + vec2(0.25, 0.25);
                    GLF_live18reuse = floor(GLF_live18reuse * 256.0) / 256.0;
                    GLF_live18_GLF_color = texture(GLF_live18tex, GLF_live18reuse);
                   }
                  }
                  int GLF_live5_looplimiter1 = 0;
                  for(int GLF_live5i = 0; GLF_live5i < 3; GLF_live5i ++)
                   {
                    if(GLF_live5_looplimiter1 >= _GLF_IDENTITY(6, (_GLF_IDENTITY(6, _GLF_IDENTITY((6) / 1, 0 ^ ((6) / 1)))) | int(_GLF_ZERO(0.0, injectionSwitch.x))))
                     {
                      break;
                     }
                    _GLF_IDENTITY(GLF_live5_looplimiter1 ++, (GLF_live5_looplimiter1 ++) ^ (int(_GLF_ZERO(0.0, injectionSwitch.x)) << _GLF_IDENTITY(int(2), int(2))));
                    {
                     int GLF_live20_looplimiter2 = 0;
                     int GLF_live20i = _GLF_FUZZED(GLF_dead0N);
                     {
                      if(GLF_live20_looplimiter2 >= 7)
                       {
                        1;
                       }
                      GLF_live20_looplimiter2 ++;
                      GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)];
                     }
                    }
                    if(GLF_live5c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5i, 3)] >= _GLF_IDENTITY(1.0, max(_GLF_IDENTITY(1.0, float(mat2x3(_GLF_IDENTITY(1.0, mix(float(_GLF_FUZZED(3.3)), float(1.0), bool(true))), 1.0, 1.0, determinant(mat4(1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0)), 0.0, 0.0))), _GLF_IDENTITY(1.0, mix(float(_GLF_IDENTITY(1.0, clamp(1.0, 1.0, 1.0))), float(_GLF_FUZZED(77.03)), bool(false))))))
                     {
                      _GLF_IDENTITY(GLF_live5c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5i, 3)] = GLF_live5c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5i, 3)] * GLF_live5c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5i, 3)], (GLF_live5c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5i, 3)] = GLF_live5c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5i, 3)] * GLF_live5c[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5i, 3)]) * 1.0);
                     }
                   }
                 }
                 {
                  float GLF_live20grey = _GLF_FUZZED(6816.0748);
                  {
                   GLF_live20grey = 0.5 + float(GLF_live20data[3]) / 10.0;
                  }
                 }
                 break;
                }
               GLF_live2_looplimiter0 ++;
               if(_GLF_IDENTITY(GLF_live2collision(GLF_live2pos, GLF_live2picdata[_GLF_MAKE_IN_BOUNDS_INT(GLF_live2i, 8)]), ! (! (GLF_live2collision(GLF_live2pos, GLF_live2picdata[_GLF_MAKE_IN_BOUNDS_INT(GLF_live2i, 8)])))))
                {
                 GLF_live2res = GLF_live2pal[_GLF_IDENTITY(_GLF_MAKE_IN_BOUNDS_INT((int(GLF_live2picdata[_GLF_MAKE_IN_BOUNDS_INT(GLF_live2i, 8)].x) * int(GLF_live2picdata[_GLF_MAKE_IN_BOUNDS_INT(GLF_live2i, 8)].y) + GLF_live2i * 9 + 11) % 16, 16), (_GLF_IDENTITY(_GLF_MAKE_IN_BOUNDS_INT((int(GLF_live2picdata[_GLF_MAKE_IN_BOUNDS_INT(GLF_live2i, 8)].x) * int(GLF_live2picdata[_GLF_MAKE_IN_BOUNDS_INT(GLF_live2i, 8)].y) + GLF_live2i * 9 + 11) % 16, 16), ~ (~ (_GLF_MAKE_IN_BOUNDS_INT((int(GLF_live2picdata[_GLF_MAKE_IN_BOUNDS_INT(GLF_live2i, 8)].x) * int(GLF_live2picdata[_GLF_MAKE_IN_BOUNDS_INT(GLF_live2i, 8)].y) + GLF_live2i * 9 + _GLF_IDENTITY(11, (11) ^ 0)) % 16, 16))))) + 0)];
                 {
                  {
                   int GLF_live10target = _GLF_FUZZED(-32145);
                   GLF_live10BST GLF_live10currentNode = _GLF_FUZZED(GLF_live10BST(GLF_dead0N, (-93081 + GLF_dead0N), (GLF_dead0N >> GLF_dead0N)));
                   int GLF_live10index = _GLF_FUZZED(_GLF_IDENTITY(-66367, int(ivec4(_GLF_IDENTITY(-66367, (_GLF_IDENTITY(-66367, max(-66367, -66367))) | (-66367)), 0, int(_GLF_ONE(1.0, injectionSwitch.y)), 0))));
                   {
                    int GLF_live10_looplimiter1 = 0;
                    {
                     int GLF_live13i = _GLF_FUZZED((-56706 / (-48025 * 29636)));
                     vec2 GLF_live13coord = _GLF_FUZZED(vec2(-816.443, _GLF_IDENTITY(3926.8018, max(3926.8018, 3926.8018))));
                     vec4 GLF_live13texel = _GLF_FUZZED(vec4(-5870.9972, -1.5, -81.90, 312.724));
                     {
                      int GLF_live13_looplimiter0 = 0;
                      while(_GLF_IDENTITY(GLF_live13texel.x + GLF_live13texel.y + GLF_live13texel.z > 1.0 && GLF_live13i < 16, ! (! (GLF_live13texel.x + GLF_live13texel.y + GLF_live13texel.z > 1.0 && GLF_live13i < 16))))
                       {
                        if(GLF_live13_looplimiter0 >= 4)
                         {
                          break;
                         }
                        GLF_live13_looplimiter0 ++;
                        GLF_live13coord = GLF_live13texel.xz + GLF_live13texel.yy;
                        GLF_live13coord = floor(GLF_live13coord * 256.0) / 256.0;
                        GLF_live13texel = texture(GLF_live13tex, GLF_live13coord);
                        GLF_live13i ++;
                       }
                     }
                    }
                    while(GLF_live10index != - 1)
                     {
                      if(GLF_live10_looplimiter1 >= 7)
                       {
                        break;
                       }
                      {
                       int GLF_live20mid = _GLF_FUZZED((~ GLF_dead0N));
                       int GLF_live20i = _GLF_FUZZED(GLF_dead0N);
                       int GLF_live20k = _GLF_FUZZED((GLF_dead0N / 53774));
                       {
                        int GLF_live20_looplimiter1 = 0;
                        while(GLF_live20i < GLF_live20N && GLF_live20i <= GLF_live20mid)
                         {
                          if(GLF_live20_looplimiter1 >= 7)
                           {
                            break;
                           }
                          GLF_live20_looplimiter1 ++;
                          GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20k ++, 10)] = GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i ++, 10)];
                         }
                       }
                      }
                      GLF_live10_looplimiter1 ++;
                      GLF_live10currentNode = GLF_live10tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live10index, 10)];
                      {
                       int GLF_live13i = _GLF_FUZZED(-4873);
                       {
                        {
                         float GLF_live20grey = _GLF_FUZZED((- (0.8 + 75.95)));
                         {
                          if(int(GLF_live20gl_FragCoord[1]) < 150)
                           {
                            1;
                           }
                          else
                           {
                            if(int(GLF_live20gl_FragCoord[1]) < 180)
                             {
                              GLF_live20grey = 0.5 + float(GLF_live20data[5]) / 10.0;
                             }
                            else
                             {
                              if(int(GLF_live20gl_FragCoord[1]) < 210)
                               {
                                GLF_live20grey = 0.5 + float(GLF_live20data[6]) / 10.0;
                               }
                              else
                               {
                                if(int(GLF_live20gl_FragCoord[1]) < 240)
                                 {
                                  GLF_live20grey = 0.5 + float(GLF_live20data[7]) / 10.0;
                                 }
                                else
                                 {
                                  if(int(GLF_live20gl_FragCoord[1]) < 270)
                                   {
                                    GLF_live20grey = 0.5 + float(GLF_live20data[8]) / 10.0;
                                   }
                                  else
                                   {
                                    1;
                                   }
                                 }
                               }
                             }
                           }
                         }
                        }
                        int GLF_live19count = _GLF_FUZZED((GLF_dead0N << (GLF_dead0N * GLF_dead0N)));
                        int GLF_live19v = _GLF_FUZZED(-27417);
                        {
                         int GLF_live19_looplimiter0 = 0;
                         while(GLF_live19v > 1)
                          {
                           if(GLF_live19_looplimiter0 >= 6)
                            {
                             break;
                            }
                           GLF_live19_looplimiter0 ++;
                           if((GLF_live19v & 1) == 1)
                            {
                             GLF_live19v = 3 * GLF_live19v + 1;
                            }
                           else
                            {
                             GLF_live19v /= 2;
                            }
                           GLF_live19count ++;
                          }
                        }
                       }
                       vec2 GLF_live13coord = _GLF_FUZZED(vec2(-77.63, -43.21));
                       vec4 GLF_live13texel = _GLF_FUZZED(vec4(1717.6864, -5.3, 4856.6473, -39.69));
                       int GLF_live13_looplimiter0 = 0;
                       {
                        if(GLF_live13_looplimiter0 >= 4)
                         {
                          1;
                         }
                        GLF_live13_looplimiter0 ++;
                        GLF_live13coord = GLF_live13texel.xz + GLF_live13texel.yy;
                        GLF_live13coord = floor(GLF_live13coord * 256.0) / 256.0;
                        {
                         int GLF_live20_looplimiter1 = 0;
                         int GLF_live20mid = _GLF_FUZZED(GLF_dead0N);
                         int GLF_live20i = _GLF_FUZZED((GLF_dead0N % (- 21563)));
                         int GLF_live20k = _GLF_FUZZED(ivec4(92624, 70060, 25010, -47523).r);
                         while(GLF_live20i < GLF_live20N && GLF_live20i <= GLF_live20mid)
                          {
                           if(GLF_live20_looplimiter1 >= 7)
                            {
                             break;
                            }
                           GLF_live20_looplimiter1 ++;
                           GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20k ++, 10)] = GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i ++, 10)];
                          }
                        }
                        GLF_live13texel = texture(GLF_live13tex, GLF_live13coord);
                        GLF_live13i ++;
                       }
                      }
                      if(GLF_live10currentNode.data == GLF_live10target)
                       {
                        GLF_live10target;
                        {
                         int GLF_live15_looplimiter0 = 0;
                         ivec2 GLF_live15pos = _GLF_FUZZED(ivec2(-77961, -13769));
                         while(GLF_live15pos.y != 256)
                          {
                           if(GLF_live15_looplimiter0 >= 4)
                            {
                             break;
                             {
                              {
                               1;
                              }
                             }
                            }
                           {
                            vec2 GLF_live17coord = _GLF_FUZZED((vec2(1.6, 69.60) - vec2(85.52, -77.02)));
                            {
                             ivec2 GLF_live17icoord = ivec2(((GLF_live17coord - vec2(0.4, 0.6)) * vec2(1.0 / 0.4, 1.0 / 0.4)) * 256.0);
                             int GLF_live17res3 = (_GLF_IDENTITY((GLF_live17icoord.x >> 5) & 1, _GLF_IDENTITY(int(_GLF_IDENTITY(ivec4((GLF_live17icoord.x >> 5) & 1, (0 | 0), 0, 1), clamp(ivec4((GLF_live17icoord.x >> 5) & 1, (0 | 0), 0, 1), ivec4((GLF_live17icoord.x >> 5) & 1, (0 | 0), 0, 1), ivec4((GLF_live17icoord.x >> 5) & 1, (0 | 0), 0, 1)))), clamp(int(_GLF_IDENTITY(ivec4((GLF_live17icoord.x >> 5) & 1, (0 | 0), 0, 1), clamp(ivec4((GLF_live17icoord.x >> 5) & 1, (0 | 0), 0, 1), ivec4((GLF_live17icoord.x >> 5) & 1, (0 | 0), 0, 1), ivec4((GLF_live17icoord.x >> 5) & 1, (0 | 0), 0, 1)))), int(_GLF_IDENTITY(ivec4((GLF_live17icoord.x >> 5) & 1, (0 | 0), 0, 1), clamp(ivec4((GLF_live17icoord.x >> 5) & 1, (0 | 0), 0, 1), ivec4((GLF_live17icoord.x >> 5) & 1, (0 | 0), 0, 1), ivec4((GLF_live17icoord.x >> 5) & 1, (0 | 0), 0, 1)))), int(_GLF_IDENTITY(ivec4((GLF_live17icoord.x >> 5) & 1, (0 | 0), 0, 1), clamp(ivec4((GLF_live17icoord.x >> 5) & 1, (0 | 0), 0, 1), ivec4((GLF_live17icoord.x >> 5) & 1, (0 | 0), 0, 1), ivec4((GLF_live17icoord.x >> 5) & 1, (0 | 0), 0, 1)))))))) ^ ((GLF_live17icoord.y & 32) >> 5);
                             int GLF_live17res2 = (GLF_live17icoord.y * GLF_live17icoord.y >> 10) & 1;
                             int GLF_live17res1 = (GLF_live17icoord.x * GLF_live17icoord.y >> 9) & 1;
                             GLF_live17_GLF_color = vec4(float(GLF_live17res1 ^ GLF_live17res2), float(GLF_live17res2 & GLF_live17res3), float(GLF_live17res1 | GLF_live17res3), 1.0);
                            }
                           }
                           {
                            int GLF_live20_looplimiter4 = 0;
                            int GLF_live20low = _GLF_FUZZED(((GLF_dead0N - GLF_dead0N) - (-650 ^ -12948)));
                            int GLF_live20high = _GLF_FUZZED(GLF_dead0N);
                            for(int GLF_live20m = 1; GLF_live20m <= GLF_live20high; GLF_live20m = 2 * GLF_live20m)
                             {
                              if(GLF_live20_looplimiter4 >= 7)
                               {
                                break;
                               }
                              GLF_live20_looplimiter4 ++;
                              {
                               int GLF_live20_looplimiter3 = 0;
                               for(int GLF_live20i = GLF_live20low; GLF_live20i < GLF_live20high; GLF_live20i += 2 * GLF_live20m)
                                {
                                 if(GLF_live20_looplimiter3 >= 7)
                                  {
                                   break;
                                  }
                                 GLF_live20_looplimiter3 ++;
                                 int GLF_live20from = GLF_live20i;
                                 int GLF_live20mid = GLF_live20i + GLF_live20m - 1;
                                 int GLF_live20to = min(GLF_live20i + 2 * GLF_live20m - 1, GLF_live20high);
                                 GLF_live20merge(GLF_live20from, GLF_live20mid, GLF_live20to);
                                }
                              }
                             }
                           }
                           GLF_live15_looplimiter0 ++;
                           if(GLF_live15pos.x < GLF_live15dp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15pos.y, 256)] + 15 && GLF_live15pos.x > GLF_live15dp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15pos.y, 256)] - 15)
                            {
                             {
                              {
                               GLF_live16_GLF_color = texture(GLF_live16tex, GLF_live16gl_FragCoord.xy * (1.0 / 256.0));
                              }
                             }
                             float GLF_live15p = (_GLF_IDENTITY(15.0 - abs(_GLF_IDENTITY(float(GLF_live15pos.x - GLF_live15dp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15pos.y, 256)]), mix(float(float(GLF_live15pos.x - GLF_live15dp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15pos.y, 256)])), float(_GLF_FUZZED(462.500)), bool(_GLF_FALSE(false, (gl_FragCoord.x < 0.0)))))), mix(float(15.0 - abs(float(GLF_live15pos.x - GLF_live15dp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live15pos.y, 256)]))), float(_GLF_FUZZED(-6.6)), _GLF_IDENTITY(bool(false), ! (_GLF_IDENTITY(! (bool(false)), ! (! (_GLF_IDENTITY(! (bool(false)), (! (bool(false))) && true))))))))) / 15.0;
                             vec4(GLF_live15p, GLF_live15p, GLF_live15p, 1.0);
                            }
                           GLF_live15pos.y ++;
                          }
                        }
                       }
                      {
                       {
                        float GLF_live20grey = _GLF_FUZZED(27.61);
                        {
                         if(int(GLF_live20gl_FragCoord[1]) < 60)
                          {
                           GLF_live20grey = 0.5 + float(GLF_live20data[1]) / 10.0;
                          }
                         else
                          {
                           if(int(GLF_live20gl_FragCoord[1]) < 90)
                            {
                             GLF_live20grey = 0.5 + float(GLF_live20data[2]) / 10.0;
                            }
                           else
                            {
                             if(int(GLF_live20gl_FragCoord[1]) < 120)
                              {
                               GLF_live20grey = 0.5 + float(GLF_live20data[3]) / 10.0;
                              }
                             else
                              {
                               if(int(GLF_live20gl_FragCoord[1]) < 150)
                                {
                                 1;
                                }
                               else
                                {
                                 if(int(GLF_live20gl_FragCoord[1]) < 180)
                                  {
                                   GLF_live20grey = 0.5 + float(GLF_live20data[5]) / 10.0;
                                  }
                                 else
                                  {
                                   if(int(GLF_live20gl_FragCoord[1]) < 210)
                                    {
                                     GLF_live20grey = 0.5 + float(GLF_live20data[6]) / 10.0;
                                    }
                                   else
                                    {
                                     if(int(GLF_live20gl_FragCoord[1]) < 240)
                                      {
                                       GLF_live20grey = 0.5 + float(GLF_live20data[7]) / 10.0;
                                      }
                                     else
                                      {
                                       if(int(GLF_live20gl_FragCoord[1]) < 270)
                                        {
                                         GLF_live20grey = 0.5 + float(GLF_live20data[8]) / 10.0;
                                        }
                                       else
                                        {
                                         1;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                       }
                       {
                        GLF_live16_GLF_color = texture(GLF_live16tex, GLF_live16gl_FragCoord.xy * (1.0 / 256.0));
                       }
                      }
                      GLF_live10index = GLF_live10target > GLF_live10currentNode.data ? GLF_live10currentNode.rightIndex : GLF_live10currentNode.leftIndex;
                     }
                   }
                  }
                  {
                   _GLF_IDENTITY(1, (0 >> _GLF_IDENTITY(int(7), int(7))) ^ (1));
                  }
                 }
                }
              }
            }
           }
           {
            float GLF_live0data[10] = _GLF_FUZZED(float[10](-49.06, -6.1, -2.6, -0.0, -2421.2162, (394.914 / 5.5), float(GLF_dead0N), ((-442.667 != 7165.7186) ? -9380.3435 : (true ? 7.7 : 2.5)), -6.1, -2421.2162));
            {
             {
              1;
             }
            }
            if(_GLF_IDENTITY(GLF_live0gl_FragCoord.x < GLF_live0resolution.x / 2.0, true && (GLF_live0gl_FragCoord.x < GLF_live0resolution.x / 2.0)))
             {
              GLF_live0_GLF_color = vec4(GLF_live0data[0] / 10.0, GLF_live0data[5] / 10.0, _GLF_IDENTITY(GLF_live0data[9], _GLF_IDENTITY((true ? _GLF_IDENTITY(GLF_live0data[_GLF_IDENTITY(9, (true ? 9 : _GLF_FUZZED(GLF_dead0N)))], (true ? GLF_live0data[9] : _GLF_FUZZED(-9.0))) : _GLF_FUZZED(length(GLF_live0gl_FragCoord))), ((true ? _GLF_IDENTITY(GLF_live0data[9], (true ? GLF_live0data[9] : _GLF_FUZZED(-9.0))) : _GLF_FUZZED(length(GLF_live0gl_FragCoord)))) - 0.0)) / 10.0, 1.0);
              {
               int GLF_live7v = _GLF_FUZZED(_GLF_IDENTITY(_GLF_IDENTITY(ivec3(-31027, -14394, -26154).s, 0 + (ivec3(-31027, -14394, -26154).s)), (0 >> _GLF_IDENTITY(int(3), int(3))) ^ (_GLF_IDENTITY(_GLF_IDENTITY(ivec3(-31027, -14394, -26154).s, 0 + (ivec3(-31027, -14394, -26154).s)), max(_GLF_IDENTITY(ivec3(-31027, -14394, -26154).s, 0 + (ivec3(-31027, -14394, -26154).s)), _GLF_IDENTITY(_GLF_IDENTITY(ivec3(-31027, _GLF_IDENTITY(-14394, max(-14394, -14394)), -26154).s, 0 + (ivec3(-31027, -14394, -26154).s)), (_GLF_IDENTITY(ivec3(-31027, -14394, -26154).s, _GLF_IDENTITY(0, (0) ^ 0) + (ivec3(-31027, -14394, -26154).s))) | 0))))));
               int GLF_live7i = _GLF_FUZZED(GLF_dead0N);
               int GLF_live7iters = _GLF_FUZZED(GLF_dead0N);
               {
                int GLF_live7_looplimiter0 = 0;
                for(                GLF_live7i = 0;
 GLF_live7i < GLF_live7iters; GLF_live7i ++)
                 {
                  if(_GLF_IDENTITY(GLF_live7_looplimiter0 >= 4, (GLF_live7_looplimiter0 >= 4) && true))
                   {
                    break;
                   }
                  GLF_live7_looplimiter0 ++;
                  {
                   int GLF_live20to = _GLF_FUZZED((~ GLF_dead0N));
                   int GLF_live20mid = _GLF_FUZZED(ivec3(-25771, -85004, -27250).b);
                   int GLF_live20from = _GLF_FUZZED(int(176204u));
                   {
                    int GLF_live20k = GLF_live20from, GLF_live20i = GLF_live20from, GLF_live20j = GLF_live20mid + 1;
                    {
                     int GLF_live20_looplimiter0 = 0;
                     while(GLF_live20i <= GLF_live20mid && GLF_live20j <= GLF_live20to)
                      {
                       if(GLF_live20_looplimiter0 >= 7)
                        {
                         break;
                        }
                       GLF_live20_looplimiter0 ++;
                       if(GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] < GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20j, 10)])
                        {
                         GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20k ++, 10)] = GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i ++, 10)];
                        }
                       else
                        {
                         GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20k ++, 10)] = GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20j ++, 10)];
                        }
                      }
                    }
                    {
                     int GLF_live20_looplimiter1 = 0;
                     while(GLF_live20i < GLF_live20N && GLF_live20i <= GLF_live20mid)
                      {
                       if(GLF_live20_looplimiter1 >= 7)
                        {
                         break;
                        }
                       GLF_live20_looplimiter1 ++;
                       GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20k ++, 10)] = GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i ++, 10)];
                      }
                    }
                    {
                     int GLF_live20_looplimiter2 = 0;
                     for(int GLF_live20i = GLF_live20from; GLF_live20i <= GLF_live20to; GLF_live20i ++)
                      {
                       if(GLF_live20_looplimiter2 >= 7)
                        {
                         break;
                        }
                       GLF_live20_looplimiter2 ++;
                       GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)];
                      }
                    }
                   }
                  }
                  GLF_live7v = (4 * GLF_live7v * (1000 - GLF_live7v)) / 1000;
                 }
                {
                 float GLF_live14th = _GLF_FUZZED(float(48433));
                 vec2 GLF_live14a = _GLF_FUZZED(vec2(4.1, -824.721));
                 if(_GLF_IDENTITY(GLF_live14a.y, max(GLF_live14a.y, GLF_live14a.y)) < GLF_live14a.x)
                  {
                   GLF_live14th = 0.5 - GLF_live14th;
                  }
                 {
                  float GLF_live20grey = _GLF_FUZZED((false ? 198.356 : vec4(696.750, 38.26, 5.1, -0.9).p));
                  {
                   GLF_live20grey = 0.5 + float(GLF_live20data[0]) / 10.0;
                  }
                 }
                }
                {
                 vec2 GLF_live17coord = _GLF_FUZZED(vec2(-4.4, -4464.6592));
                 if(GLF_live17coord.y < 0.6)
                  {
                   uvec2 GLF_live17icoord = uvec2(((_GLF_IDENTITY(GLF_live17coord, vec2(1.0, 1.0) * (_GLF_IDENTITY(GLF_live17coord, vec2(0.0, 0.0) + (_GLF_IDENTITY(GLF_live17coord, min(GLF_live17coord, GLF_live17coord)))))) - vec2(0.4, 0.0)) * vec2(1.0 / 0.4, 1.0 / 0.6)) * 256.0);
                   uint GLF_live17res1 = uint(((GLF_live17icoord.x * GLF_live17icoord.y) >> (GLF_live17icoord.x & 31u)) & 0xffffffffu);
                   uint GLF_live17res2 = uint(((GLF_live17icoord.x * GLF_live17icoord.y) << (GLF_live17icoord.x & 31u)) & 0xffffffffu);
                   float GLF_live17res = float(((GLF_live17res2 & 0x80000000u) != 0u ? 1u : 0u) ^ ((GLF_live17res1 & 1u) != 0u ? 1u : 0u));
                   GLF_live17_GLF_color = vec4(GLF_live17res, GLF_live17res, GLF_live17res, 1.0);
                  }
                 else
                  {
                   ivec2 GLF_live17icoord = ivec2(((GLF_live17coord - _GLF_IDENTITY(vec2(0.4, 0.6), min(_GLF_IDENTITY(vec2(0.4, 0.6), max(vec2(0.4, 0.6), vec2(0.4, 0.6))), vec2(0.4, 0.6)))) * vec2(1.0 / 0.4, 1.0 / 0.4)) * 256.0);
                   int GLF_live17res3 = ((GLF_live17icoord.x >> 5) & 1) ^ ((GLF_live17icoord.y & 32) >> 5);
                   int GLF_live17res2 = (GLF_live17icoord.y * GLF_live17icoord.y >> 10) & 1;
                   int GLF_live17res1 = (GLF_live17icoord.x * GLF_live17icoord.y >> 9) & 1;
                   GLF_live17_GLF_color = vec4(float(GLF_live17res1 ^ GLF_live17res2), float(GLF_live17res2 & GLF_live17res3), float(GLF_live17res1 | GLF_live17res3), 1.0);
                  }
                }
                {
                 float GLF_live20grey = _GLF_FUZZED(-358.031);
                 if(int(GLF_live20gl_FragCoord[1]) < 60)
                  {
                   GLF_live20grey = 0.5 + float(GLF_live20data[1]) / 10.0;
                  }
                 else
                  {
                   if(int(GLF_live20gl_FragCoord[1]) < 90)
                    {
                     GLF_live20grey = 0.5 + float(GLF_live20data[2]) / 10.0;
                    }
                   else
                    {
                     if(int(GLF_live20gl_FragCoord[1]) < 120)
                      {
                       GLF_live20grey = 0.5 + float(GLF_live20data[3]) / 10.0;
                      }
                     else
                      {
                       if(int(GLF_live20gl_FragCoord[1]) < 150)
                        {
                         1;
                        }
                       else
                        {
                         if(int(GLF_live20gl_FragCoord[1]) < 180)
                          {
                           GLF_live20grey = 0.5 + float(GLF_live20data[5]) / 10.0;
                          }
                         else
                          {
                           if(int(GLF_live20gl_FragCoord[1]) < 210)
                            {
                             GLF_live20grey = 0.5 + float(GLF_live20data[6]) / 10.0;
                            }
                           else
                            {
                             if(int(GLF_live20gl_FragCoord[1]) < 240)
                              {
                               GLF_live20grey = 0.5 + float(GLF_live20data[7]) / 10.0;
                              }
                             else
                              {
                               if(int(GLF_live20gl_FragCoord[1]) < 270)
                                {
                                 GLF_live20grey = 0.5 + float(GLF_live20data[8]) / 10.0;
                                }
                               else
                                {
                                 1;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
               }
              }
              {
               vec2 GLF_live12pos = _GLF_FUZZED((vec2(3.3, -4237.5123) / -1377.9742));
               {
                {
                 vec3 GLF_live18texel = texture(GLF_live18tex, GLF_live18gl_FragCoord.xy * (1.0 / 256.0)).xyz;
                 vec2 GLF_live18reuse = (GLF_live18texel.xz + GLF_live18texel.yy) * 0.5 + vec2(0.25, 0.25);
                 GLF_live18reuse = floor(GLF_live18reuse * 256.0) / 256.0;
                 GLF_live18_GLF_color = texture(GLF_live18tex, GLF_live18reuse);
                }
               }
               if(GLF_live12pointInTriangle(GLF_live12pos, vec2(0.7, 0.3), vec2(0.5, 0.9), vec2(0.1, 0.4)) == 1)
                {
                 GLF_live12_GLF_color = vec4(1.0, 0.0, 0.0, 1.0);
                }
               else
                {
                 GLF_live12_GLF_color = vec4(0.0, 0.0, 0.0, 1.0);
                }
               {
                {
                 1;
                }
               }
              }
              {
               {
                {
                 vec3 GLF_live18texel = texture(GLF_live18tex, GLF_live18gl_FragCoord.xy * (1.0 / 256.0)).xyz;
                 vec2 GLF_live18reuse = (GLF_live18texel.xz + GLF_live18texel.yy) * 0.5 + vec2(0.25, 0.25);
                 GLF_live18reuse = floor(GLF_live18reuse * 256.0) / 256.0;
                 GLF_live18_GLF_color = texture(GLF_live18tex, GLF_live18reuse);
                }
               }
               int GLF_live11_looplimiter1 = 0;
               if(GLF_live11_looplimiter1 >= 5)
                {
                 1;
                }
              }
              {
               int GLF_live19v = _GLF_FUZZED((28730 >> -60459));
               {
                int GLF_live20_looplimiter3 = 0;
                int GLF_live20high = _GLF_FUZZED((+ GLF_dead0N));
                int GLF_live20m = _GLF_FUZZED(GLF_dead0N);
                int GLF_live20i = _GLF_FUZZED(-48916);
                {
                 if(GLF_live20_looplimiter3 >= 7)
                  {
                   1;
                  }
                 GLF_live20_looplimiter3 ++;
                 int GLF_live20from = GLF_live20i;
                 int GLF_live20mid = GLF_live20i + GLF_live20m - 1;
                 int GLF_live20to = min(GLF_live20i + 2 * GLF_live20m - 1, GLF_live20high);
                 GLF_live20merge(GLF_live20from, GLF_live20mid, GLF_live20to);
                }
               }
               {
                {
                 int GLF_live20to = _GLF_FUZZED((GLF_dead0N * 99706));
                 int GLF_live20_looplimiter2 = 0;
                 int GLF_live20from = _GLF_FUZZED(60587);
                 for(int GLF_live20i = GLF_live20from; GLF_live20i <= GLF_live20to; GLF_live20i ++)
                  {
                   if(GLF_live20_looplimiter2 >= 7)
                    {
                     break;
                    }
                   GLF_live20_looplimiter2 ++;
                   GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)];
                  }
                }
                GLF_live19v = 3 * GLF_live19v + 1;
               }
              }
             }
            else
             {
              GLF_live0_GLF_color = vec4(GLF_live0data[_GLF_IDENTITY(5, ~ (~ (5)))] / 10.0, _GLF_IDENTITY(GLF_live0data[9] / 10.0, (GLF_live0data[9] / 10.0) + 0.0), _GLF_IDENTITY(GLF_live0data[0], float(mat3x4(GLF_live0data[0], 1.0, sqrt(1.0), 0.0, length(vec4(0.0, 0.0, 0.0, 0.0)), 1.0, 1.0, abs(1.0), 1.0, 1.0, 1.0, 1.0))) / 10.0, 1.0);
             }
           }
           {
            {
             vec2 GLF_live6uvstep = _GLF_FUZZED(vec2(-22.69, 38.77));
             {
              int GLF_live20low = _GLF_FUZZED(GLF_dead0N);
              int GLF_live20high = _GLF_FUZZED((GLF_dead0N >> -92090));
              int GLF_live20m = _GLF_FUZZED(GLF_dead0N);
              {
               int GLF_live20_looplimiter3 = 0;
               for(int GLF_live20i = GLF_live20low; GLF_live20i < GLF_live20high; GLF_live20i += 2 * GLF_live20m)
                {
                 if(GLF_live20_looplimiter3 >= 7)
                  {
                   break;
                  }
                 GLF_live20_looplimiter3 ++;
                 int GLF_live20from = GLF_live20i;
                 int GLF_live20mid = GLF_live20i + GLF_live20m - 1;
                 int GLF_live20to = min(GLF_live20i + 2 * GLF_live20m - 1, GLF_live20high);
                 GLF_live20merge(GLF_live20from, GLF_live20mid, GLF_live20to);
                }
              }
             }
             int GLF_live6i = _GLF_IDENTITY(_GLF_FUZZED(-11500), (_GLF_FUZZED(-11500)) ^ (0 << _GLF_IDENTITY(_GLF_IDENTITY(int(6), int(6)), (_GLF_IDENTITY(int(6), int(6))) + 0)));
             float GLF_live6h = _GLF_FUZZED(45.07);
             int GLF_live6_looplimiter0 = 0;
             float GLF_live6slope = _GLF_FUZZED(vec2(5.7, -25.38).g);
             {
              {
               int GLF_live20_looplimiter3 = 0;
               if(GLF_live20_looplimiter3 >= 7)
                {
                 1;
                }
              }
              {
               vec2 GLF_live12pos = _GLF_IDENTITY(GLF_live12gl_FragCoord, (GLF_live12gl_FragCoord) + vec4(0.0, 0.0, 0.0, 0.0)).xy / GLF_live12resolution;
               if(GLF_live12pointInTriangle(GLF_live12pos, vec2(0.7, 0.3), _GLF_IDENTITY(vec2(0.5, 0.9), exp(vec2(0.0, 0.0)) * (vec2(0.5, 0.9))), vec2(0.1, 0.4)) == 1)
                {
                 GLF_live12_GLF_color = vec4(1.0, 0.0, 0.0, 1.0);
                }
               else
                {
                 GLF_live12_GLF_color = vec4(0.0, 0.0, 0.0, 1.0);
                }
              }
             }
             {
              {
               {
                int GLF_live19v = _GLF_FUZZED((10545 - 21904));
                {
                 GLF_live19v /= 2;
                }
               }
               {
                0.0;
                {
                 int GLF_live20_looplimiter1 = 0;
                 int GLF_live20i = _GLF_FUZZED(-74820);
                 int GLF_live20k = _GLF_FUZZED((+ (~ -74495)));
                 {
                  if(GLF_live20_looplimiter1 >= 7)
                   {
                    1;
                   }
                  GLF_live20_looplimiter1 ++;
                  GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20k ++, 10)] = GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i ++, 10)];
                 }
                }
               }
              }
              int GLF_live8directions = _GLF_FUZZED(ivec2(-4412, 62861).g);
              ivec2 GLF_live8p = _GLF_FUZZED(ivec2(-28277, -12249));
              if(_GLF_IDENTITY(GLF_live8p.x, ~ (~ _GLF_IDENTITY((GLF_live8p.x), clamp((GLF_live8p.x), (GLF_live8p.x), (GLF_live8p.x))))) > 0 && GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x - 2) + (GLF_live8p.y) * 16, 256)] == 0)
               {
                GLF_live8directions += 1;
                {
                 int GLF_live20low = _GLF_FUZZED(GLF_dead0N);
                 int GLF_live20high = _GLF_FUZZED((-43471 + (+ 46108)));
                 int GLF_live20m = _GLF_FUZZED(GLF_dead0N);
                 {
                  int GLF_live20_looplimiter3 = 0;
                  for(int GLF_live20i = GLF_live20low; GLF_live20i < GLF_live20high; GLF_live20i += 2 * GLF_live20m)
                   {
                    if(GLF_live20_looplimiter3 >= 7)
                     {
                      break;
                     }
                    GLF_live20_looplimiter3 ++;
                    int GLF_live20from = GLF_live20i;
                    int GLF_live20mid = GLF_live20i + GLF_live20m - 1;
                    int GLF_live20to = min(GLF_live20i + 2 * GLF_live20m - 1, GLF_live20high);
                    GLF_live20merge(GLF_live20from, GLF_live20mid, GLF_live20to);
                   }
                 }
                }
               }
             }
             vec2 GLF_live6coord = _GLF_FUZZED(vec2(vec4(_GLF_IDENTITY(-6889.1234, (-6889.1234) - 0.0), 0.2, -0.8, -1765.2046)));
             float GLF_live6refh = _GLF_FUZZED(_GLF_IDENTITY(-3.9, (true ? -3.9 : _GLF_FUZZED(GLF_live6h))));
             {
              if(_GLF_IDENTITY(GLF_live6_looplimiter0, (GLF_live6_looplimiter0) | 0) >= 5)
               {
                1;
               }
              {
               {
                vec3 GLF_live18texel = texture(GLF_live18tex, GLF_live18gl_FragCoord.xy * (1.0 / 256.0)).xyz;
                {
                 {
                  1;
                 }
                }
                vec2 GLF_live18reuse = (GLF_live18texel.xz + GLF_live18texel.yy) * 0.5 + vec2(0.25, 0.25);
                GLF_live18reuse = floor(GLF_live18reuse * 256.0) / 256.0;
                GLF_live18_GLF_color = texture(GLF_live18tex, GLF_live18reuse);
                {
                 float GLF_live20grey = _GLF_FUZZED(vec2(664.703, 92.07).s);
                 if(int(GLF_live20gl_FragCoord[1]) < 210)
                  {
                   GLF_live20grey = 0.5 + float(GLF_live20data[6]) / 10.0;
                  }
                 else
                  {
                   if(int(GLF_live20gl_FragCoord[1]) < 240)
                    {
                     GLF_live20grey = 0.5 + float(GLF_live20data[7]) / 10.0;
                    }
                   else
                    {
                     if(int(GLF_live20gl_FragCoord[1]) < 270)
                      {
                       GLF_live20grey = 0.5 + float(GLF_live20data[8]) / 10.0;
                      }
                     else
                      {
                       1;
                      }
                    }
                  }
                }
               }
              }
              {
               int GLF_live10target = _GLF_FUZZED(GLF_dead0N);
               int GLF_live10_looplimiter1 = 0;
               GLF_live10BST GLF_live10currentNode = _GLF_FUZZED(GLF_live10BST(_GLF_IDENTITY(GLF_dead0N, (_GLF_IDENTITY(GLF_dead0N, (GLF_dead0N) / 1)) ^ 0), GLF_dead0N, 60306));
               int GLF_live10index = _GLF_FUZZED(int(-1.4));
               {
                {
                 vec2 GLF_live14coord = GLF_live14gl_FragCoord.xy * (1.0 / 256.0);
                 _GLF_IDENTITY(GLF_live14coord = GLF_live14polarize(GLF_live14coord), (true ? GLF_live14coord = GLF_live14polarize(GLF_live14coord) : _GLF_FUZZED(vec2(-7020.2750, -420.590))));
                 {
                  float GLF_live20grey = _GLF_FUZZED(((73.23 / -0.7)));
                  {
                   GLF_live20grey = 0.5 + float(GLF_live20data[0]) / 10.0;
                  }
                 }
                 GLF_live14coord = floor(GLF_live14coord * 256.0) / 256.0;
                 GLF_live14_GLF_color = vec4(texture(GLF_live14tex, GLF_live14coord).xyz, 1.0);
                }
                {
                 {
                  1;
                 }
                }
               }
               {
                {
                 int GLF_live20low = _GLF_FUZZED(3100);
                 int GLF_live20high = _GLF_FUZZED((-99974 % 47484));
                 {
                  int GLF_live20_looplimiter4 = 0;
                  for(int GLF_live20m = 1; GLF_live20m <= GLF_live20high; GLF_live20m = 2 * GLF_live20m)
                   {
                    if(GLF_live20_looplimiter4 >= 7)
                     {
                      break;
                     }
                    GLF_live20_looplimiter4 ++;
                    {
                     int GLF_live20_looplimiter3 = 0;
                     for(int GLF_live20i = GLF_live20low; GLF_live20i < GLF_live20high; GLF_live20i += 2 * GLF_live20m)
                      {
                       if(GLF_live20_looplimiter3 >= 7)
                        {
                         break;
                        }
                       GLF_live20_looplimiter3 ++;
                       int GLF_live20from = GLF_live20i;
                       int GLF_live20mid = GLF_live20i + GLF_live20m - 1;
                       int GLF_live20to = min(GLF_live20i + 2 * GLF_live20m - 1, GLF_live20high);
                       GLF_live20merge(GLF_live20from, GLF_live20mid, GLF_live20to);
                      }
                    }
                   }
                 }
                }
                if(GLF_live10_looplimiter1 >= 7)
                 {
                  1;
                 }
                GLF_live10_looplimiter1 ++;
                GLF_live10currentNode = GLF_live10tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live10index, 10)];
                if(GLF_live10currentNode.data == GLF_live10target)
                 {
                  GLF_live10target;
                 }
                GLF_live10index = GLF_live10target > GLF_live10currentNode.data ? GLF_live10currentNode.rightIndex : GLF_live10currentNode.leftIndex;
               }
               {
                float GLF_live20grey = _GLF_FUZZED((- -8103.4002));
                if(int(GLF_live20gl_FragCoord[1]) < 150)
                 {
                  1;
                 }
                else
                 {
                  if(int(GLF_live20gl_FragCoord[1]) < 180)
                   {
                    GLF_live20grey = 0.5 + float(GLF_live20data[5]) / 10.0;
                   }
                  else
                   {
                    if(int(GLF_live20gl_FragCoord[1]) < 210)
                     {
                      GLF_live20grey = 0.5 + float(GLF_live20data[6]) / 10.0;
                     }
                    else
                     {
                      if(int(GLF_live20gl_FragCoord[1]) < 240)
                       {
                        GLF_live20grey = 0.5 + float(GLF_live20data[7]) / 10.0;
                       }
                      else
                       {
                        if(int(GLF_live20gl_FragCoord[1]) < 270)
                         {
                          GLF_live20grey = 0.5 + float(GLF_live20data[8]) / 10.0;
                         }
                        else
                         {
                          1;
                         }
                       }
                     }
                   }
                 }
               }
              }
              GLF_live6_looplimiter0 ++;
              {
               int GLF_live20_looplimiter5 = 0;
               if(GLF_live20_looplimiter5 >= 7)
                {
                 1;
                }
              }
              GLF_live6coord -= GLF_live6uvstep;
              _GLF_IDENTITY(GLF_live6refh += GLF_live6slope, (GLF_live6refh += GLF_live6slope) / 1.0);
              GLF_live6h = texture(GLF_live6tex, GLF_live6coord).y;
              GLF_live6i ++;
             }
            }
            vec3 GLF_live3color = _GLF_FUZZED((_GLF_IDENTITY(mat3(5138.2521, -7302.6095, 85.01, 2.2, 5.3, 2.3, -919.213, 300.483, -7403.3832) * (1216.3395 - vec3(-0.5, _GLF_IDENTITY(-8310.5892, float(vec3(-8310.5892, abs(0.0), determinant(mat3(1.0, 0.0, 0.0, 0.0, cos(0.0), round(length(normalize(vec3(1.0, 1.0, 1.0)))), 0.0, 0.0, 1.0))))), -7.3)), (mat3(5138.2521, -7302.6095, 85.01, 2.2, 5.3, 2.3, -919.213, 300.483, -7403.3832) * (_GLF_IDENTITY(1216.3395 - vec3(-0.5, -8310.5892, -7.3), clamp(1216.3395 - vec3(-0.5, -8310.5892, -7.3), 1216.3395 - vec3(-0.5, -8310.5892, -7.3), 1216.3395 - vec3(-0.5, -8310.5892, -7.3))))) / vec3(1.0, 1.0, 1.0))));
            {
             GLF_live3color.x += float(GLF_live3obj.numbers[1]);
             {
              float GLF_live20grey = _GLF_FUZZED((true ? 4705.1530 : 7.1));
              {
               if(int(GLF_live20gl_FragCoord[1]) < 240)
                {
                 GLF_live20grey = 0.5 + float(GLF_live20data[7]) / 10.0;
                }
               else
                {
                 if(int(GLF_live20gl_FragCoord[1]) < 270)
                  {
                   GLF_live20grey = 0.5 + float(GLF_live20data[8]) / 10.0;
                  }
                 else
                  {
                   1;
                  }
                }
              }
             }
             {
              {
               1;
              }
              {
               {
                {
                 1;
                }
               }
               int GLF_live10_looplimiter0 = 0;
               if(GLF_live10_looplimiter0 >= 7)
                {
                 1;
                }
              }
             }
            }
           }
           discard;
           {
            int GLF_live8i = _GLF_FUZZED(_GLF_IDENTITY(GLF_dead0N, (GLF_dead0N) ^ 0));
            vec2 GLF_live8pos = _GLF_FUZZED((vec2(-4317.3830, -6220.4586) * mat2(-9.1, 457.794, _GLF_IDENTITY(9.5, min(9.5, 9.5)), 2.1)));
            int GLF_live8v = _GLF_FUZZED(ivec2(56650, 67172).t);
            bool GLF_live8canwalk = _GLF_FUZZED((_GLF_IDENTITY(170934u, (0u >> _GLF_IDENTITY(uint(7u), uint(7u))) | (_GLF_IDENTITY(170934u, (_GLF_IDENTITY(170934u, (true ? 170934u : _GLF_FUZZED(94326u)))) >> 0u))) == 153266u));
            ivec2 GLF_live8p = _GLF_FUZZED(ivec2(46113, 8823));
            {
             int GLF_live20_looplimiter4 = 0;
             if(GLF_live20_looplimiter4 >= 7)
              {
               1;
              }
            }
            {
             {
              float GLF_live20grey = _GLF_FUZZED((-8598.3002 / 851.431));
              {
               if(int(GLF_live20gl_FragCoord[1]) < 120)
                {
                 GLF_live20grey = 0.5 + float(GLF_live20data[3]) / 10.0;
                }
               else
                {
                 if(int(GLF_live20gl_FragCoord[1]) < 150)
                  {
                   1;
                  }
                 else
                  {
                   if(int(GLF_live20gl_FragCoord[1]) < 180)
                    {
                     GLF_live20grey = 0.5 + float(GLF_live20data[5]) / 10.0;
                    }
                   else
                    {
                     if(int(GLF_live20gl_FragCoord[1]) < 210)
                      {
                       GLF_live20grey = 0.5 + float(GLF_live20data[6]) / 10.0;
                      }
                     else
                      {
                       if(int(GLF_live20gl_FragCoord[1]) < 240)
                        {
                         GLF_live20grey = 0.5 + float(GLF_live20data[7]) / 10.0;
                        }
                       else
                        {
                         if(int(GLF_live20gl_FragCoord[1]) < 270)
                          {
                           GLF_live20grey = 0.5 + float(GLF_live20data[8]) / 10.0;
                          }
                         else
                          {
                           1;
                          }
                        }
                      }
                    }
                  }
                }
              }
             }
             int GLF_live19v = _GLF_FUZZED((-6288 / int(187982u)));
             {
              GLF_live19v /= 2;
             }
            }
            ivec2 GLF_live8ipos = _GLF_FUZZED((ivec2(-19880, -98658) ^ ivec2(-64518, -51594)));
            {
             int GLF_live8_looplimiter3 = 0;
             do
              {
               if(GLF_live8_looplimiter3 >= 3)
                {
                 {
                  {
                   1;
                  }
                 }
                 break;
                 {
                  {
                   vec2 GLF_live17coord = vec2(GLF_live17gl_FragCoord.xy) * (1.0 / 256.0);
                   if(GLF_live17coord.x > 0.4)
                    {
                     if(GLF_live17coord.y < 0.6)
                      {
                       uvec2 GLF_live17icoord = uvec2(((GLF_live17coord - vec2(0.4, 0.0)) * vec2(1.0 / 0.4, 1.0 / 0.6)) * 256.0);
                       uint GLF_live17res1 = uint(((GLF_live17icoord.x * GLF_live17icoord.y) >> (GLF_live17icoord.x & 31u)) & 0xffffffffu);
                       uint GLF_live17res2 = uint(((GLF_live17icoord.x * GLF_live17icoord.y) << (GLF_live17icoord.x & 31u)) & 0xffffffffu);
                       float GLF_live17res = float(((GLF_live17res2 & 0x80000000u) != 0u ? 1u : 0u) ^ ((GLF_live17res1 & 1u) != 0u ? 1u : 0u));
                       GLF_live17_GLF_color = vec4(GLF_live17res, GLF_live17res, GLF_live17res, 1.0);
                      }
                     else
                      {
                       {
                        int GLF_live20i = _GLF_FUZZED(GLF_dead0N);
                        {
                         1;
                         GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 4;
                         1;
                         1;
                         GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 3;
                         1;
                         1;
                         GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 2;
                         1;
                         1;
                         GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 1;
                         1;
                         1;
                         GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = 0;
                         1;
                         1;
                         GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = - 1;
                         1;
                         1;
                         GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = - 2;
                         1;
                         1;
                         GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = - 3;
                         1;
                         1;
                         GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = - 4;
                         1;
                         1;
                         GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] = - 5;
                         1;
                        }
                       }
                       ivec2 GLF_live17icoord = ivec2(((GLF_live17coord - vec2(0.4, 0.6)) * vec2(1.0 / 0.4, 1.0 / 0.4)) * 256.0);
                       int GLF_live17res3 = ((GLF_live17icoord.x >> 5) & 1) ^ ((GLF_live17icoord.y & 32) >> 5);
                       int GLF_live17res2 = (GLF_live17icoord.y * GLF_live17icoord.y >> 10) & 1;
                       int GLF_live17res1 = (GLF_live17icoord.x * GLF_live17icoord.y >> 9) & 1;
                       GLF_live17_GLF_color = vec4(float(GLF_live17res1 ^ GLF_live17res2), float(GLF_live17res2 & GLF_live17res3), float(GLF_live17res1 | GLF_live17res3), 1.0);
                      }
                    }
                   else
                    {
                     ivec2 GLF_live17icoord = ivec2(((GLF_live17coord - vec2(0.4, 0.0)) * vec2(1.0 / 0.6, 1.0)) * 256.0);
                     int GLF_live17v = (GLF_live17icoord.x ^ GLF_live17icoord.y) * GLF_live17icoord.y;
                     bool GLF_live17res1 = ((GLF_live17v >> 10) & 1) != 0;
                     bool GLF_live17res2 = ((GLF_live17v >> 11) & 4) != 0;
                     bool GLF_live17res3 = ((GLF_live17v >> 12) & 8) != 0;
                     GLF_live17_GLF_color = vec4(GLF_live17res1 ? 1.0 : 0.0, GLF_live17res2 ? 1.0 : 0.0, GLF_live17res3 ? 1.0 : 0.0, 1);
                    }
                  }
                 }
                }
               GLF_live8_looplimiter3 ++;
               GLF_live8v ++;
               int GLF_live8directions = 0;
               if(GLF_live8p.x > 0 && GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT(_GLF_IDENTITY((GLF_live8p.x - 2) + (GLF_live8p.y) * 16, min((GLF_live8p.x - 2) + (GLF_live8p.y) * 16, (GLF_live8p.x - 2) + (GLF_live8p.y) * 16)), 256)] == 0)
                {
                 {
                  {
                   0;
                  }
                 }
                 GLF_live8directions += 1;
                }
               if(_GLF_IDENTITY(GLF_live8p, (GLF_live8p) * ivec2(1, 1)).y > 0 && GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT(_GLF_IDENTITY((GLF_live8p.x), (0 | 0) ^ ((GLF_live8p.x))) + (GLF_live8p.y - 2) * 16, 256)] == _GLF_IDENTITY(0, int(int(0))))
                {
                 GLF_live8directions += 1;
                }
               if(GLF_live8p.x < 14 && GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x + 2) + (GLF_live8p.y) * 16, 256)] == 0)
                {
                 {
                  {
                   1;
                  }
                 }
                 GLF_live8directions += 1;
                }
               if(GLF_live8p.y < 14 && GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x) + (GLF_live8p.y + 2) * _GLF_IDENTITY(16, (16) >> _GLF_IDENTITY(0, (0) + 0)), 256)] == 0)
                {
                 GLF_live8directions += 1;
                }
               if(GLF_live8directions == 0)
                {
                 GLF_live8canwalk = false;
                 int GLF_live8j = _GLF_FUZZED(findLSB(packHalf2x16(GLF_live8pos)));
                 {
                  vec2 GLF_live12pos = _GLF_FUZZED(vec2(-41.66, _GLF_IDENTITY(3.6, (_GLF_IDENTITY(3.6, float(mat3x4(3.6, 0.0, 1.0, 0.0, 1.0, determinant(mat2(1.0, 0.0, 0.0, 1.0)), _GLF_ZERO(0.0, injectionSwitch.x), 1.0, 0.0, 0.0, 1.0, 0.0)))) / determinant(mat3(1.0, 1.0, sqrt(1.0), 0.0, 1.0, 1.0, 0.0, 0.0, _GLF_ONE(1.0, injectionSwitch.y))))));
                  {
                   {
                    vec3 GLF_live18texel = texture(GLF_live18tex, GLF_live18gl_FragCoord.xy * (1.0 / 256.0)).xyz;
                    vec2 GLF_live18reuse = (GLF_live18texel.xz + GLF_live18texel.yy) * 0.5 + vec2(0.25, 0.25);
                    GLF_live18reuse = floor(GLF_live18reuse * 256.0) / 256.0;
                    GLF_live18_GLF_color = texture(GLF_live18tex, GLF_live18reuse);
                   }
                  }
                  if(GLF_live12pointInTriangle(GLF_live12pos, vec2(0.7, 0.3), vec2(0.5, 0.9), vec2(0.1, 0.4)) == 1)
                   {
                    GLF_live12_GLF_color = vec4(1.0, 0.0, 0.0, _GLF_IDENTITY(1.0, max(1.0, _GLF_IDENTITY(1.0, 0.0 + (1.0)))));
                   }
                  else
                   {
                    GLF_live12_GLF_color = vec4(0.0, 0.0, 0.0, 1.0);
                   }
                 }
                 {
                  int GLF_live8_looplimiter2 = 0;
                  for(                  GLF_live8i = 0;
 GLF_live8i < 8; GLF_live8i ++)
                   {
                    if(GLF_live8_looplimiter2 >= 3)
                     {
                      break;
                      {
                       {
                        vec3 GLF_live18texel = texture(GLF_live18tex, GLF_live18gl_FragCoord.xy * (1.0 / 256.0)).xyz;
                        vec2 GLF_live18reuse = (GLF_live18texel.xz + GLF_live18texel.yy) * 0.5 + vec2(0.25, _GLF_IDENTITY(0.25, min(0.25, 0.25)));
                        GLF_live18reuse = floor(GLF_live18reuse * 256.0) / 256.0;
                        _GLF_IDENTITY(GLF_live18_GLF_color = texture(GLF_live18tex, GLF_live18reuse), (true ? GLF_live18_GLF_color = texture(GLF_live18tex, GLF_live18reuse) : _GLF_FUZZED(GLF_live0gl_FragCoord)));
                       }
                      }
                      {
                       int GLF_live20_looplimiter6 = 0;
                       for(int GLF_live20j = 0; GLF_live20j < 10; GLF_live20j ++)
                        {
                         if(GLF_live20_looplimiter6 >= 7)
                          {
                           break;
                          }
                         GLF_live20_looplimiter6 ++;
                         GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20j, 10)] = GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20j, 10)];
                        }
                      }
                     }
                    GLF_live8_looplimiter2 ++;
                    {
                     int GLF_live8_looplimiter1 = 0;
                     {
                      int GLF_live19v = _GLF_FUZZED((GLF_dead0N | (GLF_dead0N * GLF_dead0N)));
                      if((GLF_live19v & 1) == 1)
                       {
                        GLF_live19v = 3 * GLF_live19v + 1;
                       }
                      else
                       {
                        GLF_live19v /= 2;
                       }
                     }
                     for(                     GLF_live8j = 0;
 GLF_live8j < 8; GLF_live8j ++)
                      {
                       if(GLF_live8_looplimiter1 >= 3)
                        {
                         {
                          int GLF_live13i = _GLF_FUZZED(GLF_dead0N);
                          vec2 GLF_live13coord = _GLF_FUZZED(vec2(4823.7025, 0.3));
                          vec4 GLF_live13texel = _GLF_FUZZED((4.6 + vec4(7430.0371, vec2(-2.3, -691.102), 5083.7071)));
                          int GLF_live13_looplimiter0 = 0;
                          {
                           if(GLF_live13_looplimiter0 >= 4)
                            {
                             1;
                            }
                           GLF_live13_looplimiter0 ++;
                           GLF_live13coord = GLF_live13texel.xz + GLF_live13texel.yy;
                           GLF_live13coord = floor(GLF_live13coord * 256.0) / 256.0;
                           GLF_live13texel = texture(GLF_live13tex, GLF_live13coord);
                           GLF_live13i ++;
                           {
                            float GLF_live20grey = _GLF_FUZZED((vec2(11.73, -8.4) + 685.704).x);
                            {
                             GLF_live20grey = 0.5 + float(GLF_live20data[6]) / 10.0;
                            }
                           }
                          }
                         }
                         break;
                        }
                       GLF_live8_looplimiter1 ++;
                       if(GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT(_GLF_IDENTITY(GLF_live8j * 2 + GLF_live8i * 2 * 16, max(_GLF_IDENTITY(GLF_live8j * 2 + GLF_live8i * 2 * 16, 1 * (GLF_live8j * 2 + GLF_live8i * 2 * 16)), GLF_live8j * 2 + GLF_live8i * 2 * 16)), 256)] == 0)
                        {
                         GLF_live8p.x = GLF_live8j * 2;
                         GLF_live8p.y = GLF_live8i * 2;
                         GLF_live8canwalk = true;
                        }
                      }
                    }
                   }
                 }
                 GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x) + (GLF_live8p.y) * 16, 256)] = 1;
                }
               else
                {
                 int GLF_live8d = GLF_live8v % _GLF_IDENTITY(GLF_live8directions, int(_GLF_IDENTITY(ivec4(_GLF_IDENTITY(GLF_live8directions, 1 * (GLF_live8directions)), 1, 1, ((1 << _GLF_IDENTITY(int(2), int(2))) >> _GLF_IDENTITY(int(2), int(2)))), ~ (_GLF_IDENTITY(~ (ivec4(_GLF_IDENTITY(GLF_live8directions, _GLF_IDENTITY(1, _GLF_IDENTITY(int(int(1)), (_GLF_TRUE(true, (gl_FragCoord.y >= 0.0)) ? int(int(1)) : _GLF_FUZZED(GLF_dead0N)))) * (GLF_live8directions)), 1, 1, ((1 << _GLF_IDENTITY(int(2), int(2))) >> _GLF_IDENTITY(int(2), int(2))))), (~ (ivec4(_GLF_IDENTITY(GLF_live8directions, 1 * (GLF_live8directions)), 1, 1, ((1 << _GLF_IDENTITY(int(2), int(2))) >> _GLF_IDENTITY(int(2), int(2)))))) | (~ (ivec4(_GLF_IDENTITY(GLF_live8directions, 1 * (GLF_live8directions)), 1, 1, ((1 << _GLF_IDENTITY(int(2), int(2))) >> _GLF_IDENTITY(int(2), int(2)))))))))));
                 GLF_live8v += GLF_live8directions;
                 if(GLF_live8d >= 0 && GLF_live8p.x > 0 && GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x - 2) + _GLF_IDENTITY((GLF_live8p.y) * 16, (_GLF_IDENTITY((GLF_live8p.y) * 16, clamp((GLF_live8p.y) * 16, _GLF_IDENTITY((GLF_live8p.y) * 16, min((GLF_live8p.y) * 16, (GLF_live8p.y) * 16)), (GLF_live8p.y) * 16))) << int(_GLF_ZERO(0.0, injectionSwitch.x))), 256)] == 0)
                  {
                   GLF_live8d --;
                   GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x) + (GLF_live8p.y) * 16, 256)] = 1;
                   GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x - 1) + (GLF_live8p.y) * 16, 256)] = 1;
                   {
                    float GLF_live14z = _GLF_FUZZED(4.4);
                    vec2 GLF_live14a = _GLF_FUZZED((mat2(6245.7220, 9.2, -7283.8471, -5.0) * vec2(2.0, -762.655)));
                    {
                     GLF_live14z = GLF_live14a.x / GLF_live14a.y;
                    }
                   }
                   GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x - 2) + (GLF_live8p.y) * 16, 256)] = 1;
                   GLF_live8p.x -= 2;
                  }
                 if(GLF_live8d >= 0 && GLF_live8p.y > 0 && GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x) + (GLF_live8p.y - 2) * 16, 256)] == 0)
                  {
                   GLF_live8d --;
                   GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x) + (GLF_live8p.y) * 16, 256)] = 1;
                   _GLF_IDENTITY(GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x) + (GLF_live8p.y - 1) * 16, 256)] = 1, (GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x) + (GLF_live8p.y - 1) * 16, 256)] = 1) << 0);
                   GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x) + (GLF_live8p.y - 2) * 16, 256)] = 1;
                   GLF_live8p.y -= 2;
                  }
                 {
                  {
                   1;
                  }
                 }
                 if(GLF_live8d >= 0 && GLF_live8p.x < 14 && _GLF_IDENTITY(GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x + 2) + _GLF_IDENTITY((GLF_live8p.y), ((GLF_live8p.y)) | 0) * 16, 256)], int(ivec2(GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x + 2) + (GLF_live8p.y) * 16, 256)], int(_GLF_ONE(1.0, injectionSwitch.y))))) == 0)
                  {
                   {
                    float GLF_live20grey = _GLF_FUZZED(62.10);
                    if(int(GLF_live20gl_FragCoord[1]) < 210)
                     {
                      GLF_live20grey = 0.5 + float(GLF_live20data[6]) / 10.0;
                     }
                    else
                     {
                      if(int(GLF_live20gl_FragCoord[1]) < 240)
                       {
                        GLF_live20grey = 0.5 + float(GLF_live20data[7]) / 10.0;
                       }
                      else
                       {
                        if(int(GLF_live20gl_FragCoord[1]) < 270)
                         {
                          GLF_live20grey = 0.5 + float(GLF_live20data[8]) / 10.0;
                         }
                        else
                         {
                          1;
                         }
                       }
                     }
                   }
                   GLF_live8d --;
                   GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x) + (GLF_live8p.y) * 16, 256)] = 1;
                   GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x + 1) + (GLF_live8p.y) * 16, 256)] = 1;
                   GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x + 2) + (GLF_live8p.y) * 16, 256)] = 1;
                   {
                    int GLF_live20low = _GLF_FUZZED(GLF_dead0N);
                    int GLF_live20high = _GLF_FUZZED(GLF_dead0N);
                    {
                     int GLF_live20_looplimiter4 = 0;
                     for(int GLF_live20m = 1; GLF_live20m <= GLF_live20high; GLF_live20m = 2 * GLF_live20m)
                      {
                       if(GLF_live20_looplimiter4 >= 7)
                        {
                         break;
                        }
                       GLF_live20_looplimiter4 ++;
                       {
                        int GLF_live20_looplimiter3 = 0;
                        for(int GLF_live20i = GLF_live20low; GLF_live20i < GLF_live20high; GLF_live20i += 2 * GLF_live20m)
                         {
                          if(GLF_live20_looplimiter3 >= 7)
                           {
                            break;
                           }
                          GLF_live20_looplimiter3 ++;
                          int GLF_live20from = GLF_live20i;
                          int GLF_live20mid = GLF_live20i + GLF_live20m - 1;
                          int GLF_live20to = min(GLF_live20i + 2 * GLF_live20m - 1, GLF_live20high);
                          GLF_live20merge(GLF_live20from, GLF_live20mid, GLF_live20to);
                         }
                       }
                      }
                    }
                   }
                   GLF_live8p.x += 2;
                  }
                 if(GLF_live8d >= 0 && GLF_live8p.y < _GLF_IDENTITY(14, (14) | (14)) && GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x) + (GLF_live8p.y + 2) * 16, 256)] == 0)
                  {
                   GLF_live8d --;
                   GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x) + (GLF_live8p.y) * 16, 256)] = 1;
                   GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x) + (GLF_live8p.y + 1) * 16, 256)] = 1;
                   GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT((GLF_live8p.x) + (GLF_live8p.y + 2) * 16, 256)] = 1;
                   {
                    {
                     vec3 GLF_live18texel = texture(GLF_live18tex, GLF_live18gl_FragCoord.xy * (1.0 / 256.0)).xyz;
                     vec2 GLF_live18reuse = (GLF_live18texel.xz + GLF_live18texel.yy) * 0.5 + vec2(0.25, 0.25);
                     GLF_live18reuse = floor(GLF_live18reuse * 256.0) / 256.0;
                     GLF_live18_GLF_color = texture(GLF_live18tex, GLF_live18reuse);
                    }
                   }
                   GLF_live8p.y += 2;
                  }
                }
               if(GLF_live8map[_GLF_MAKE_IN_BOUNDS_INT(GLF_live8ipos.y * 16 + GLF_live8ipos.x, 256)] == 1)
                {
                 GLF_live8_GLF_color = vec4(1.0, 1.0, 1.0, 1.0);
                 1;
                 {
                  {
                   vec2 GLF_live17coord = vec2(GLF_live17gl_FragCoord.xy) * (1.0 / _GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_FUZZED(63.76)), bool(false))));
                   if(GLF_live17coord.x > 0.4)
                    {
                     if(GLF_live17coord.y < 0.6)
                      {
                       uvec2 GLF_live17icoord = uvec2(((GLF_live17coord - vec2(0.4, 0.0)) * vec2(1.0 / 0.4, 1.0 / 0.6)) * 256.0);
                       uint GLF_live17res1 = uint(((GLF_live17icoord.x * GLF_live17icoord.y) >> (_GLF_IDENTITY(GLF_live17icoord, min(GLF_live17icoord, GLF_live17icoord)).x & 31u)) & 0xffffffffu);
                       uint GLF_live17res2 = uint(((GLF_live17icoord.x * GLF_live17icoord.y) << (GLF_live17icoord.x & 31u)) & _GLF_IDENTITY(0xffffffffu, (_GLF_IDENTITY(0xffffffffu, (0xffffffffu) | (0xffffffffu))) | 0u));
                       float GLF_live17res = float(((GLF_live17res2 & 0x80000000u) != 0u ? 1u : 0u) ^ ((GLF_live17res1 & 1u) != 0u ? 1u : 0u));
                       GLF_live17_GLF_color = vec4(GLF_live17res, GLF_live17res, GLF_live17res, 1.0);
                      }
                     else
                      {
                       ivec2 GLF_live17icoord = ivec2(((GLF_live17coord - vec2(0.4, _GLF_IDENTITY(0.6, (true ? 0.6 : _GLF_FUZZED(donor_replacementGLF_dead0grey))))) * vec2(1.0 / 0.4, 1.0 / 0.4)) * 256.0);
                       int GLF_live17res3 = ((GLF_live17icoord.x >> 5) & 1) ^ ((GLF_live17icoord.y & 32) >> 5);
                       int GLF_live17res2 = (GLF_live17icoord.y * _GLF_IDENTITY(GLF_live17icoord.y, (_GLF_IDENTITY(GLF_live17icoord.y, (GLF_live17icoord.y) * 1)) >> 0) >> 10) & 1;
                       int GLF_live17res1 = (GLF_live17icoord.x * GLF_live17icoord.y >> 9) & 1;
                       GLF_live17_GLF_color = vec4(float(GLF_live17res1 ^ GLF_live17res2), float(GLF_live17res2 & GLF_live17res3), float(GLF_live17res1 | GLF_live17res3), 1.0);
                      }
                    }
                   else
                    {
                     ivec2 GLF_live17icoord = ivec2(((GLF_live17coord - vec2(_GLF_IDENTITY(0.4, (false ? _GLF_FUZZED((donor_replacementGLF_dead0grey)) : 0.4)), 0.0)) * vec2(1.0 / 0.6, 1.0)) * 256.0);
                     int GLF_live17v = (GLF_live17icoord.x ^ GLF_live17icoord.y) * GLF_live17icoord.y;
                     bool GLF_live17res1 = ((GLF_live17v >> 10) & 1) != 0;
                     bool GLF_live17res2 = ((GLF_live17v >> 11) & 4) != 0;
                     bool GLF_live17res3 = ((GLF_live17v >> 12) & 8) != 0;
                     GLF_live17_GLF_color = vec4(GLF_live17res1 ? 1.0 : 0.0, GLF_live17res2 ? 1.0 : 0.0, GLF_live17res3 ? 1.0 : 0.0, 1);
                    }
                   {
                    float GLF_live20grey = _GLF_FUZZED(-95.59);
                    {
                     GLF_live20grey = 0.5 + float(GLF_live20data[6]) / 10.0;
                    }
                   }
                  }
                 }
                }
              }
             while(GLF_live8canwalk);
            }
           }
           {
            {
             GLF_live16_GLF_color = texture(GLF_live16tex, GLF_live16gl_FragCoord.xy * (1.0 / 256.0));
            }
           }
          }
        }
      }
    }
   {
    {
     {
      {
       int GLF_live20i = _GLF_FUZZED(71216);
       int GLF_live20j = _GLF_FUZZED(98570);
       int GLF_live20k = _GLF_FUZZED(GLF_dead0N);
       if(GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i, 10)] < GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20j, 10)])
        {
         GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20k ++, 10)] = GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20i ++, 10)];
        }
       else
        {
         GLF_live20temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20k ++, 10)] = GLF_live20data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live20j ++, 10)];
        }
      }
      vec2 GLF_live12pos = _GLF_IDENTITY(GLF_live12gl_FragCoord.xy / GLF_live12resolution, vec2(0.0, 0.0) + (GLF_live12gl_FragCoord.xy / GLF_live12resolution));
      if(GLF_live12pointInTriangle(GLF_live12pos, vec2(0.7, 0.3), vec2(0.5, 0.9), vec2(0.1, 0.4)) == 1)
       {
        {
         {
          vec3 GLF_live18texel = _GLF_IDENTITY(texture(GLF_live18tex, GLF_live18gl_FragCoord.xy * (1.0 / 256.0)), (false ? _GLF_FUZZED(GLF_live18gl_FragCoord) : texture(GLF_live18tex, GLF_live18gl_FragCoord.xy * (1.0 / 256.0)))).xyz;
          vec2 GLF_live18reuse = (GLF_live18texel.xz + GLF_live18texel.yy) * 0.5 + vec2(0.25, 0.25);
          GLF_live18reuse = floor(GLF_live18reuse * 256.0) / 256.0;
          GLF_live18_GLF_color = texture(GLF_live18tex, GLF_live18reuse);
         }
        }
        GLF_live12_GLF_color = vec4(1.0, 0.0, 0.0, 1.0);
       }
      else
       {
        GLF_live12_GLF_color = vec4(0.0, 0.0, 0.0, 1.0);
       }
      {
       {
        1;
       }
      }
     }
    }
    vec2 GLF_live1coord = _GLF_FUZZED(vec2(104.359, -2.8));
    if(GLF_live1coord.y > 1.0)
     GLF_live1coord.y -= 1.0;
   }
  }
 {
  float GLF_live14th = _GLF_FUZZED(7.8);
  vec2 GLF_live14a = _GLF_FUZZED((vec4(-3.8, -354.756, 9.3, -114.848).tt / vec2(-7.4, 4.2)));
  if(GLF_live14a.y < GLF_live14a.x)
   {
    GLF_live14th = 0.5 - GLF_live14th;
   }
 }
 _GLF_color = texel;
}
