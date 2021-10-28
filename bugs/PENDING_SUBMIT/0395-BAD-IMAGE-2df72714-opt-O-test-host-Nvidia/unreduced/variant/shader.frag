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

struct _GLF_struct_14 {
 uvec3 _f0;
} ;

struct _GLF_struct_13 {
 mat3x2 _f0;
 int _f1;
 mat4x2 _f2;
} ;

struct _GLF_struct_15 {
 _GLF_struct_13 _f0;
 _GLF_struct_14 _f1;
} ;

struct _GLF_struct_11 {
 bvec2 _f0;
 int _f1;
 mat2x3 _f2;
 bool _f3;
} ;

struct _GLF_struct_10 {
 mat4x2 _f0;
 uvec4 _f1;
 mat4x2 _f2;
 mat4x2 _f3;
 mat2 _f4;
 vec4 _f5;
} ;

struct _GLF_struct_12 {
 ivec2 _f0;
 mat2 _f1;
 _GLF_struct_10 _f2;
 uvec4 _f3;
 float dist;
 vec4 _f4;
 _GLF_struct_11 _f5;
 mat2 _f6;
} ;

struct _GLF_struct_8 {
 mat4 _f0;
 bool _f1;
 vec3 _f2;
} ;

struct _GLF_struct_7 {
 bvec3 _f0;
 ivec3 _f1;
} ;

struct _GLF_struct_6 {
 uvec4 _f0;
 ivec4 _f1;
} ;

struct _GLF_struct_5 {
 mat4x3 _f0;
 mat2x3 _f1;
 mat4 _f2;
 mat2x3 _f3;
 vec2 _f4;
 ivec3 _f5;
 bvec4 _f6;
} ;

struct _GLF_struct_9 {
 _GLF_struct_5 _f0;
 mat4x2 _f1;
 _GLF_struct_6 _f2;
 vec4 _f3;
 _GLF_struct_7 _f4;
 _GLF_struct_8 _f5;
 mat3x2 _f6;
} ;

struct _GLF_struct_3 {
 mat3 _f0;
 mat4 _f1;
 uvec3 _f2;
} ;

struct _GLF_struct_2 {
 float _f0;
 uvec2 _f1;
 mat3 _f2;
 bvec2 _f3;
 uvec2 _f4;
 bvec2 _f5;
} ;

struct _GLF_struct_1 {
 uvec2 _f0;
 mat2x4 _f1;
 vec4 _f2;
 ivec3 _f3;
} ;

struct _GLF_struct_0 {
 vec3 _f0;
 mat4x2 _f1;
 float _f2;
} ;

struct _GLF_struct_4 {
 uvec4 _f0;
 _GLF_struct_0 _f1;
 bvec2 _f2;
 _GLF_struct_1 _f3;
 _GLF_struct_2 _f4;
 _GLF_struct_3 _f5;
 bool _f6;
} ;

struct _GLF_struct_16 {
 _GLF_struct_4 _f0;
 _GLF_struct_9 _f1;
 _GLF_struct_12 _f2;
 mat2x4 _f3;
 _GLF_struct_15 _f4;
 ivec3 _f5;
 ivec4 _f6;
} ;

layout(push_constant) uniform buf_push {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform sampler2D tex;

float ReallyApproxNormalizedAtan2(vec2 v)
{
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = log(vec4(-6607.5278, 957.013, -8.6, 4.1));
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= _GLF_IDENTITY(0.0, (false ? _GLF_FUZZED(7892.0894) : 0.0))))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 {
  if(_GLF_DEAD(false))
   return 1.0;
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
   {
    _GLF_color = (6.5 * vec4(-92.86, -9.1, 0.9, -83.32)).tsts;
   }
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
   {
    _GLF_color = vec4(vec2(-2.5, -7823.2245), dFdy(vec2(9.0, -1.9)));
   }
  _GLF_color = vec4(469.208, 0.5, 9.9, 6.5);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, bool(bvec4(true, false, false, false)))))
   {
    if(_GLF_DEAD(false))
     return 1.0;
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 float pi2 = _GLF_IDENTITY(1.0 / (_GLF_IDENTITY(355.0, float(mat4(355.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, tan(0.0), 1.0, determinant(mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, _GLF_IDENTITY(0.0, mix(float(_GLF_IDENTITY(0.0, mix(float(0.0), float(_GLF_FUZZED(18.52)), bool(false)))), float(_GLF_FUZZED(-31.67)), bool(false))), 1.0)), 0.0, 0.0))) / 113.0), min(1.0 / (_GLF_IDENTITY(355.0, float(mat4(355.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, _GLF_IDENTITY(1.0, float(mat2x3(1.0, 0.0, cos(0.0), 0.0, 1.0, 0.0))), 0.0, 1.0, 0.0, _GLF_IDENTITY(tan(0.0), mix(float(_GLF_IDENTITY(tan(0.0), (true ? _GLF_IDENTITY(tan(0.0), max(tan(0.0), tan(0.0))) : _GLF_FUZZED(6.1)))), float(_GLF_FUZZED(95.30)), bool(false))), 1.0, determinant(mat3(1.0, 0.0, _GLF_IDENTITY(0.0, max(0.0, 0.0)), 0.0, 1.0, 0.0, 0.0, 0.0, 1.0)), 0.0, 0.0))) / 113.0), 1.0 / (_GLF_IDENTITY(_GLF_IDENTITY(355.0, float(mat4(355.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, tan(0.0), 1.0, determinant(mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0)), 0.0, 0.0))), max(_GLF_IDENTITY(_GLF_IDENTITY(355.0, float(mat4(355.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, _GLF_IDENTITY(1.0, max(1.0, 1.0)), 0.0, 1.0, 0.0, tan(0.0), 1.0, _GLF_IDENTITY(determinant(mat3(1.0, 0.0, 0.0, 0.0, 1.0, _GLF_IDENTITY(0.0, min(0.0, 0.0)), 0.0, 0.0, 1.0)), cos(0.0) * (determinant(mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, _GLF_IDENTITY(1.0, float(_GLF_IDENTITY(mat2x4(1.0, 1.0, 0.0, 1.0, 1.0, round(length(normalize(1.0))), exp(0.0), 1.0), (false ? _GLF_FUZZED(mat2x4(3096.1869, 18.83, -6.0, -7508.8798, -121.266, -2.9, -3.9, -0.4)) : mat2x4(1.0, 1.0, 0.0, 1.0, 1.0, round(length(normalize(1.0))), exp(0.0), 1.0))))))))), 0.0, 0.0))), mix(float(_GLF_IDENTITY(_GLF_IDENTITY(355.0, float(mat4(355.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, tan(_GLF_IDENTITY(0.0, (false ? _GLF_FUZZED(4.7) : 0.0))), 1.0, determinant(mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, _GLF_IDENTITY(0.0, min(0.0, _GLF_IDENTITY(0.0, clamp(0.0, 0.0, 0.0)))), 1.0)), 0.0, 0.0))), clamp(_GLF_IDENTITY(355.0, float(mat4(355.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, tan(0.0), 1.0, determinant(mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0)), 0.0, 0.0))), _GLF_IDENTITY(355.0, float(mat4(355.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, _GLF_IDENTITY(tan(0.0), _GLF_IDENTITY(float(vec3(_GLF_IDENTITY(tan(0.0), clamp(tan(0.0), tan(0.0), tan(0.0))), 1.0, _GLF_ONE(1.0, injectionSwitch.y))), clamp(float(_GLF_IDENTITY(vec3(_GLF_IDENTITY(tan(0.0), clamp(tan(0.0), tan(0.0), _GLF_IDENTITY(tan(0.0), clamp(tan(0.0), _GLF_IDENTITY(tan(0.0), (tan(0.0)) * 1.0), _GLF_IDENTITY(tan(0.0), clamp(tan(0.0), tan(0.0), tan(0.0))))))), 1.0, _GLF_ONE(1.0, injectionSwitch.y)), vec3(_GLF_IDENTITY(mat2x4(vec3(_GLF_IDENTITY(tan(0.0), clamp(tan(0.0), tan(0.0), _GLF_IDENTITY(tan(0.0), clamp(tan(0.0), _GLF_IDENTITY(tan(0.0), (tan(0.0)) * 1.0), _GLF_IDENTITY(tan(0.0), clamp(tan(0.0), tan(0.0), tan(0.0))))))), 1.0, _GLF_ONE(1.0, injectionSwitch.y)), 0.0, 1.0, 0.0, 1.0, 0.0), mat2x4(mat3x4(mat2x4(vec3(_GLF_IDENTITY(tan(0.0), clamp(tan(0.0), tan(0.0), _GLF_IDENTITY(tan(0.0), clamp(tan(0.0), _GLF_IDENTITY(tan(0.0), (tan(0.0)) * 1.0), _GLF_IDENTITY(tan(0.0), clamp(tan(0.0), tan(0.0), tan(0.0))))))), 1.0, _GLF_ONE(1.0, injectionSwitch.y)), 0.0, 1.0, 0.0, 1.0, 0.0))))))), _GLF_IDENTITY(float(vec3(_GLF_IDENTITY(tan(0.0), clamp(tan(0.0), tan(0.0), tan(0.0))), 1.0, _GLF_ONE(1.0, injectionSwitch.y))), min(_GLF_IDENTITY(float(vec3(_GLF_IDENTITY(tan(0.0), clamp(tan(0.0), tan(0.0), tan(0.0))), 1.0, _GLF_ONE(1.0, injectionSwitch.y))), (float(vec3(_GLF_IDENTITY(tan(0.0), clamp(tan(0.0), tan(0.0), tan(0.0))), 1.0, _GLF_ONE(1.0, injectionSwitch.y)))) / 1.0), float(vec3(_GLF_IDENTITY(tan(0.0), _GLF_IDENTITY(clamp(tan(0.0), tan(0.0), tan(0.0)), max(clamp(tan(0.0), tan(0.0), tan(0.0)), clamp(tan(0.0), tan(0.0), tan(0.0))))), 1.0, _GLF_ONE(1.0, injectionSwitch.y))))), float(vec3(_GLF_IDENTITY(tan(0.0), clamp(tan(0.0), tan(0.0), tan(0.0))), 1.0, _GLF_ONE(1.0, injectionSwitch.y)))))), 1.0, determinant(mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0)), 0.0, 0.0))), _GLF_IDENTITY(355.0, float(mat4(355.0, 0.0, 0.0, 1.0, 1.0, 0.0, _GLF_IDENTITY(0.0, _GLF_IDENTITY(float(_GLF_IDENTITY(mat4(0.0, 0.0, 1.0, 0.0, 1.0, _GLF_ONE(1.0, injectionSwitch.y), 1.0, 1.0, 1.0, _GLF_IDENTITY(log(exp(0.0)), (true ? log(exp(0.0)) : _GLF_FUZZED(6.6))), 1.0, 0.0, 1.0, 1.0, 0.0, 0.0), transpose(transpose(_GLF_IDENTITY(mat4(0.0, 0.0, 1.0, 0.0, 1.0, _GLF_ONE(1.0, injectionSwitch.y), 1.0, 1.0, 1.0, log(exp(_GLF_IDENTITY(0.0, float(vec4(0.0, 1.0, 1.0, 1.0))))), 1.0, 0.0, 1.0, 1.0, 0.0, 0.0), (mat4(0.0, 0.0, 1.0, 0.0, 1.0, _GLF_ONE(1.0, injectionSwitch.y), 1.0, 1.0, 1.0, log(exp(0.0)), 1.0, 0.0, 1.0, 1.0, 0.0, 0.0)) - mat4(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, _GLF_IDENTITY(0.0, clamp(0.0, 0.0, 0.0)), 0.0, 0.0, 0.0, 0.0, 0.0, 0.0)))))), (true ? float(_GLF_IDENTITY(mat4(0.0, 0.0, 1.0, 0.0, 1.0, _GLF_ONE(1.0, injectionSwitch.y), 1.0, 1.0, 1.0, log(exp(0.0)), 1.0, 0.0, 1.0, 1.0, 0.0, 0.0), transpose(transpose(_GLF_IDENTITY(mat4(0.0, 0.0, 1.0, 0.0, 1.0, _GLF_ONE(1.0, injectionSwitch.y), 1.0, 1.0, 1.0, log(exp(0.0)), 1.0, 0.0, 1.0, 1.0, 0.0, 0.0), (mat4(0.0, 0.0, 1.0, 0.0, 1.0, _GLF_ONE(1.0, injectionSwitch.y), _GLF_IDENTITY(1.0, 1.0 * (_GLF_IDENTITY(1.0, max(1.0, _GLF_IDENTITY(1.0, (1.0) / 1.0))))), 1.0, 1.0, log(exp(0.0)), 1.0, 0.0, 1.0, 1.0, 0.0, 0.0)) - mat4(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0)))))) : _GLF_FUZZED(77.58)))), 1.0, 0.0, 1.0, 0.0, tan(0.0), 1.0, determinant(mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0)), 0.0, 0.0)))))), float(_GLF_FUZZED(409.012)), bool(false))), _GLF_IDENTITY(_GLF_IDENTITY(355.0, float(mat4(355.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, tan(0.0), 1.0, determinant(mat3(1.0, 0.0, 0.0, 0.0, 1.0, _GLF_IDENTITY(0.0, _GLF_IDENTITY((0.0), ((0.0)) * 1.0) - 0.0), 0.0, 0.0, 1.0)), 0.0, 0.0))), clamp(_GLF_IDENTITY(355.0, _GLF_IDENTITY(float(mat4(355.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, tan(0.0), 1.0, determinant(mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0)), 0.0, 0.0)), (_GLF_IDENTITY(float(mat4(355.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, tan(0.0), 1.0, determinant(mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0)), 0.0, 0.0)), mix(float(float(mat4(355.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, tan(0.0), 1.0, determinant(mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0)), 0.0, 0.0))), float(_GLF_FUZZED(vec4(8608.0493, 75.87, -58.63, -2.7).q)), bool(false)))) - abs(0.0))), _GLF_IDENTITY(355.0, float(mat4(355.0, 0.0, _GLF_IDENTITY(0.0, (0.0) * 1.0), 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, tan(0.0), 1.0, determinant(mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0)), 0.0, 0.0))), _GLF_IDENTITY(355.0, _GLF_IDENTITY(float(mat4(355.0, 0.0, 0.0, 1.0, _GLF_IDENTITY(1.0, mix(float(1.0), float(_GLF_FUZZED(-669.672)), bool(false))), 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, tan(0.0), 1.0, determinant(mat3(1.0, _GLF_IDENTITY(0.0, clamp(0.0, 0.0, 0.0)), 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0)), 0.0, 0.0)), clamp(float(mat4(355.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, tan(0.0), 1.0, determinant(mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0)), 0.0, 0.0)), float(mat4(355.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, tan(0.0), 1.0, determinant(mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0)), 0.0, 0.0)), float(mat4(355.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, tan(0.0), 1.0, determinant(mat3(1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0)), 0.0, 0.0))))))))) / 113.0)));
 if(_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((gl_FragCoord.y < 0.0), bool(bvec4(_GLF_IDENTITY((gl_FragCoord.y < 0.0), ((gl_FragCoord.y < 0.0)) && true), true, _GLF_FALSE(false, (gl_FragCoord.y < 0.0)), true))))))
  {
   if(_GLF_IDENTITY(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))), false || (_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))))
    return 1.0;
   if(_GLF_DEAD(false))
    return 1.0;
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(5.1, 4912.2487, 9671.6629, -59.30);
    }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = sign(mat3x4(_GLF_IDENTITY(-3372.8810, (_GLF_IDENTITY(-3372.8810, _GLF_IDENTITY(float(vec4(-3372.8810, _GLF_IDENTITY(dot(vec3(0.0, 1.0, 0.0), vec3(0.0, 1.0, 0.0)), dot(vec3(0.0, 1.0, 0.0), vec3(0.0, 1.0, 0.0))), 0.0, 1.0)), float(vec2(float(vec4(-3372.8810, _GLF_IDENTITY(dot(vec3(0.0, 1.0, 0.0), vec3(0.0, 1.0, 0.0)), dot(vec3(0.0, _GLF_IDENTITY(1.0, (1.0) * 1.0), 0.0), vec3(0.0, 1.0, 0.0))), 0.0, 1.0)), 1.0))))) / 1.0), 4.1, 1.6, _GLF_IDENTITY(-6217.6624, (-6217.6624) / 1.0), 5.7, 5897.4479, -94.81, -9438.7731, -8799.1559, 4664.0778, 5320.4882, -56.84)[2]);
    if(_GLF_IDENTITY(_GLF_WRAPPED_IF_TRUE(true), bool(bool(_GLF_WRAPPED_IF_TRUE(true)))))
     {
      _GLF_IDENTITY(_GLF_IDENTITY(_GLF_color = _GLF_outVarBackup_GLF_color, (true ? _GLF_IDENTITY(_GLF_color = _GLF_outVarBackup_GLF_color, (_GLF_color = _GLF_outVarBackup_GLF_color) * vec4(1.0, 1.0, 1.0, 1.0)) : _GLF_FUZZED(vec4(-4.0, -991.868, 0.9, 285.742)))), (false ? _GLF_FUZZED(_GLF_color) : _GLF_IDENTITY(_GLF_color = _GLF_outVarBackup_GLF_color, (true ? _GLF_IDENTITY(_GLF_color = _GLF_outVarBackup_GLF_color, (_GLF_color = _GLF_outVarBackup_GLF_color) * vec4(1.0, 1.0, 1.0, 1.0)) : _GLF_FUZZED(vec4(-4.0, -991.868, 0.9, 285.742))))));
      if(_GLF_DEAD(false))
       return 1.0;
     }
   }
   if(_GLF_IDENTITY(_GLF_WRAPPED_IF_FALSE(false), ! (! (_GLF_WRAPPED_IF_FALSE(false)))))
    {
    }
   else
    {
     return 1.0;
    }
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    return 1.0;
   return 1.0;
  }
 if(length(v) < 0.001)
  {
   if(_GLF_DEAD(false))
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = (300.183 * (vec4(7.3, 7.8, 2036.4793, 1219.5530) * mat4(-469.254, -8.1, -3021.0175, -64.04, -859.265, 9799.0437, 0.5, -2.8, _GLF_IDENTITY(1.1, min(1.1, _GLF_IDENTITY(1.1, mix(float(_GLF_FUZZED(876.790)), float(1.1), bool(true))))), -88.90, 5597.5473, -9.0, 87.91, 1.8, 44.55, -38.76)));
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     do
      {
       _GLF_color = vec4(-9272.9035, -868.226, 7.2, 4204.0082);
      }
     while(_GLF_WRAPPED_LOOP(false));
     if(_GLF_DEAD(false))
      return 1.0;
    }
   if(_GLF_DEAD(_GLF_IDENTITY(false, false || (false))))
    return 1.0;
   if(_GLF_DEAD(false))
    return 1.0;
   return 0.0;
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-32.19, -2.5, -477.051, _GLF_IDENTITY(-379.167, 1.0 * (-379.167)));
  if(_GLF_IDENTITY(_GLF_WRAPPED_IF_TRUE(true), (_GLF_WRAPPED_IF_TRUE(true)) || _GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(5.2, -7457.5342, -54.29, -705.725);
     if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, (true) && true)))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    if(_GLF_DEAD(false))
     return 1.0;
   }
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = fract(vec4(2.2, 532.388, 15.60, 1.0));
   if(_GLF_IDENTITY(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))), ! (_GLF_IDENTITY(! (_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0)))), (! (_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))) || false))))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
 }
 vec2 a = abs(v);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return 1.0;
 float z;
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  return 1.0;
 if(a.y > a.x)
  {
   {
    if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.x < _GLF_ZERO(0.0, injectionSwitch.x), (_GLF_IDENTITY(gl_FragCoord.x, clamp(gl_FragCoord.x, _GLF_IDENTITY(gl_FragCoord.x, max(gl_FragCoord.x, gl_FragCoord.x)), gl_FragCoord.x)) < _GLF_ZERO(0.0, injectionSwitch.x)) && true)))))
     return 1.0;
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     return 1.0;
    _GLF_color = vec4(34.14, 3.9, _GLF_IDENTITY(-1.0, min(-1.0, _GLF_IDENTITY(-1.0, (-1.0) + 0.0))), 130.562);
    if(_GLF_IDENTITY(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, true && (true))), (_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, _GLF_IDENTITY(bool(bvec2(true, _GLF_IDENTITY(true, ! (_GLF_IDENTITY(! (true), false || (! (true))))))), ! (! (bool(bvec2(true, true)))))))) || false))
     {
      if(_GLF_DEAD(false))
       {
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = dFdy(vec4(3664.9328, 99.27, -0.8, 8.8));
         if(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_WRAPPED_IF_TRUE(true), ! (! (_GLF_IDENTITY(_GLF_WRAPPED_IF_TRUE(true), bool(bvec2(_GLF_IDENTITY(_GLF_WRAPPED_IF_TRUE(true), (_GLF_WRAPPED_IF_TRUE(true)) || false), true)))))), ! (_GLF_IDENTITY(! (_GLF_WRAPPED_IF_TRUE(true)), ! (_GLF_IDENTITY(! (! (_GLF_WRAPPED_IF_TRUE(true))), (! (! (_GLF_WRAPPED_IF_TRUE(true)))) || false))))))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(-2141.9041, 2.2, -2.0, -9.2);
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        return 1.0;
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         return 1.0;
       }
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   z = a.x / a.y;
  }
 else
  {
   z = a.y / _GLF_IDENTITY(a.x, clamp(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(a.x, float(_GLF_IDENTITY(vec3(a.x, 1.0, 1.0), (vec3(a.x, 1.0, 1.0)) - vec3(0.0, 0.0, 0.0)))), (a.x) + 0.0), mix(float(_GLF_FUZZED(-904.743)), float(a.x), bool(true))), a.x, _GLF_IDENTITY(a.x, (false ? _GLF_FUZZED(pi2) : a.x))));
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(false))
   {
    if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), false || (_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))) || false)))))
     {
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = dFdy(vec4(8.1, 6.5, 77.68, -126.030));
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      return 1.0;
     }
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < abs(_GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED(_GLF_IDENTITY(_GLF_IDENTITY(-4.5, clamp(_GLF_IDENTITY(-4.5, max(-4.5, -4.5)), -4.5, _GLF_IDENTITY(-4.5, min(-4.5, -4.5)))), max(_GLF_IDENTITY(-4.5, clamp(_GLF_IDENTITY(-4.5, max(-4.5, -4.5)), -4.5, _GLF_IDENTITY(-4.5, min(-4.5, -4.5)))), _GLF_IDENTITY(_GLF_IDENTITY(-4.5, clamp(_GLF_IDENTITY(-4.5, max(-4.5, -4.5)), -4.5, _GLF_IDENTITY(-4.5, min(-4.5, -4.5)))), float(mat4x3(_GLF_IDENTITY(-4.5, clamp(_GLF_IDENTITY(-4.5, max(-4.5, -4.5)), -4.5, _GLF_IDENTITY(-4.5, min(-4.5, -4.5)))), 1.0, 1.0, sqrt(1.0), 1.0, 1.0, 1.0, 1.0, 0.0, determinant(mat4(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0)), 1.0, 0.0))))))), float(0.0), bool(true))))))))
     return 1.0;
    if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord, mix(vec4((gl_FragCoord)[0], (gl_FragCoord)[1], (gl_FragCoord)[2], _GLF_FUZZED(7336.7430)), vec4(_GLF_FUZZED(-3902.4275), _GLF_FUZZED(vec3(8.5, -3.0, 983.530).x), _GLF_FUZZED(122.049), (gl_FragCoord)[3]), bvec4(false, false, _GLF_FALSE(false, (gl_FragCoord.y < 0.0)), true))).x < 0.0))))
     {
      _GLF_IDENTITY(_GLF_color = vec4(8.6, -539.462, -98.28, -97.57), vec4(1.0, 1.0, 1.0, 1.0) * (_GLF_color = vec4(8.6, -539.462, -98.28, -97.57)));
      if(_GLF_DEAD(false))
       return 1.0;
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(_GLF_IDENTITY(-8109.6917, min(-8109.6917, -8109.6917)), -386.459, -8.6, 6.8);
       if(_GLF_DEAD(false))
        return 1.0;
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
     }
    if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.x < 0.0)), ! (! (_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.x < 0.0)), bool(bvec3(_GLF_FALSE(false, (gl_FragCoord.x < 0.0)), true, true))))))))
     return 1.0;
    return _GLF_IDENTITY(1.0, (true ? 1.0 : _GLF_FUZZED(determinant(mat4(611.493, -5208.5547, 3255.1421, 6.4, -7.9, 276.590, -794.340, 3884.8417, -6.7, -93.97, -67.29, -9.6, 87.72, -7.6, 21.20, 58.55)))));
    if(_GLF_DEAD(_GLF_FALSE(_GLF_IDENTITY(false, ! (! (false))), (injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, (injectionSwitch.y) - 0.0)))))
     {
      if(_GLF_DEAD(false))
       return 1.0;
      return _GLF_IDENTITY(1.0, (_GLF_FALSE(false, (_GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord, (false ? _GLF_FUZZED(vec4(7347.3481, 36.48, -5005.7418, -94.98)) : gl_FragCoord)).y, max(_GLF_IDENTITY(gl_FragCoord, (false ? _GLF_FUZZED(vec4(7347.3481, 36.48, -5005.7418, -94.98)) : gl_FragCoord)).y, _GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord, (false ? _GLF_FUZZED(vec4(7347.3481, 36.48, -5005.7418, -94.98)) : gl_FragCoord)).y, (_GLF_IDENTITY(gl_FragCoord, (false ? _GLF_FUZZED(vec4(7347.3481, 36.48, -5005.7418, -94.98)) : gl_FragCoord)).y) - 0.0))) < 0.0)) ? _GLF_FUZZED(z) : 1.0));
     }
   }
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = vec4(190.291, -1.5, 7.3, 311.903);
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(2819.2750, -64.76, 664.718, 9158.6954);
   }
  if(_GLF_DEAD(false))
   return 1.0;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  if(_GLF_DEAD(false))
   {
    {
     vec4 _GLF_outVarBackup_GLF_color;
     if(_GLF_WRAPPED_IF_FALSE(false))
      {
      }
     else
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        return 1.0;
       _GLF_outVarBackup_GLF_color = _GLF_color;
      }
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = atan(vec4(29.65, -7.7, 9.3, 958.171));
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_IDENTITY(_GLF_outVarBackup_GLF_color, max(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color));
       }
     }
     _GLF_color = vec4(-33.50, 5.3, 4.2, 4.8);
     for(int _injected_loop_counter = (((1 << _GLF_IDENTITY(int(2), int(2))) >> _GLF_IDENTITY(int(2), int(2))) & 1); _GLF_WRAPPED_LOOP(_injected_loop_counter > int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
      {
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(7.5, 2285.4583, -9230.8190, -3.9);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         if(_GLF_DEAD(false))
          {
           {
            vec4 _GLF_outVarBackup_GLF_color;
            _GLF_outVarBackup_GLF_color = _GLF_color;
            _GLF_color = vec4(-75.16, 9.4, -8.3, _GLF_IDENTITY(16.26, (_GLF_IDENTITY(16.26, (16.26) * 1.0)) * 1.0));
            if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
             }
           }
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > _GLF_IDENTITY(injectionSwitch, (true ? _GLF_IDENTITY(injectionSwitch, clamp(_GLF_IDENTITY(injectionSwitch, min(injectionSwitch, injectionSwitch)), injectionSwitch, _GLF_IDENTITY(injectionSwitch, clamp(injectionSwitch, injectionSwitch, injectionSwitch)))) : _GLF_FUZZED(a))).y))))
            break;
           return 1.0;
           if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), false || (_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), (_GLF_FALSE(false, (gl_FragCoord.y < 0.0))) && true)))))
            break;
          }
         _GLF_IDENTITY(_GLF_color = _GLF_outVarBackup_GLF_color, vec4(0.0, 0.0, 0.0, 0.0) + _GLF_IDENTITY((_GLF_color = _GLF_outVarBackup_GLF_color), (_GLF_IDENTITY((_GLF_color = _GLF_outVarBackup_GLF_color), (_GLF_IDENTITY(true ? _GLF_IDENTITY((_GLF_color = _GLF_outVarBackup_GLF_color), vec4(1.0, 1.0, 1.0, 1.0) * ((_GLF_color = _GLF_outVarBackup_GLF_color))) : _GLF_FUZZED(_GLF_color), (_GLF_FALSE(false, (gl_FragCoord.y < length(_GLF_IDENTITY(vec4(0.0, 0.0, 0.0, 0.0), (vec4(0.0, 0.0, 0.0, 0.0)) - vec4(0.0, 0.0, 0.0, 0.0))))) ? _GLF_FUZZED((vec4(-0.1, 593.263, 4.7, 6.9) / _GLF_outVarBackup_GLF_color)) : true ? _GLF_IDENTITY((_GLF_color = _GLF_outVarBackup_GLF_color), vec4(1.0, 1.0, 1.0, 1.0) * ((_GLF_color = _GLF_outVarBackup_GLF_color))) : _GLF_FUZZED(_GLF_color)))))) - vec4(0.0, 0.0, 0.0, 0.0)));
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          return 1.0;
        }
      }
    }
    return 1.0;
    if(_GLF_DEAD(false))
     return 1.0;
    {
     if(_GLF_DEAD(false))
      return 1.0;
     vec4 _GLF_outVarBackup_GLF_color;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(-7593.6925, -9.7, -50.24, 3840.7846);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     if(_GLF_DEAD(false))
      return 1.0;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     if(_GLF_DEAD(false))
      return 1.0;
     _GLF_color = (vec4(84.94, -660.037, 5.5, -4.5) / 4.5);
     if(_GLF_WRAPPED_IF_FALSE(false))
      {
      }
     else
      {
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), bool(bvec3(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), false, _GLF_FALSE(false, (gl_FragCoord.y < 0.0)))))))
          return 1.0;
         _GLF_color = _GLF_outVarBackup_GLF_color;
         if(_GLF_DEAD(false))
          return 1.0;
        }
      }
    }
   }
  _GLF_color = (_GLF_IDENTITY(mat3x4(-8963.0098, 1.2, -467.074, 309.425, 19.65, 7.9, 9.6, 6.8, -3.3, 4.8, -330.568, _GLF_IDENTITY(-4542.8233, 0.0 + (-4542.8233))) * vec3(-877.482, -1.4, _GLF_IDENTITY(106.755, min(106.755, 106.755))), clamp(mat3x4(-8963.0098, _GLF_IDENTITY(1.2, clamp(1.2, _GLF_IDENTITY(1.2, (1.2) - 0.0), 1.2)), -467.074, 309.425, 19.65, 7.9, 9.6, _GLF_IDENTITY(6.8, min(6.8, 6.8)), -3.3, 4.8, -330.568, -4542.8233) * vec3(-877.482, -1.4, 106.755), _GLF_IDENTITY(mat3x4(-8963.0098, 1.2, -467.074, 309.425, 19.65, 7.9, 9.6, 6.8, -3.3, 4.8, -330.568, -4542.8233) * vec3(-877.482, -1.4, 106.755), vec4(mat2x4(mat3x4(-8963.0098, 1.2, -467.074, 309.425, 19.65, 7.9, 9.6, 6.8, -3.3, 4.8, -330.568, -4542.8233) * vec3(-877.482, -1.4, 106.755), 0.0, 1.0, 0.0, 1.0))), mat3x4(-8963.0098, 1.2, -467.074, 309.425, 19.65, 7.9, 9.6, 6.8, -3.3, 4.8, -330.568, -4542.8233) * vec3(-877.482, -1.4, 106.755))));
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, _GLF_IDENTITY((injectionSwitch.x < _GLF_IDENTITY(injectionSwitch, vec2(injectionSwitch[0], injectionSwitch[1])).y), ((injectionSwitch.x < _GLF_IDENTITY(injectionSwitch.y, (true ? injectionSwitch.y : _GLF_FUZZED(z))))) && true))))
   {
    if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch.x, (_GLF_TRUE(true, (_GLF_IDENTITY(gl_FragCoord, clamp(gl_FragCoord, gl_FragCoord, gl_FragCoord)).x >= 0.0)) ? _GLF_IDENTITY(injectionSwitch.x, clamp(injectionSwitch.x, injectionSwitch.x, injectionSwitch.x)) : _GLF_FUZZED(z))) > _GLF_IDENTITY(injectionSwitch.y, float(mat2(injectionSwitch.y, 1.0, log(1.0), 1.0)))))))
     {
      _GLF_color = trunc((_GLF_IDENTITY(vec4(2633.5611, -5009.4714, 15.12, 980.854) + vec4(-0.4, -4.3, -8036.2389, _GLF_IDENTITY(-42.58, float(mat2(-42.58, cos(0.0), sqrt(1.0), 0.0)))), _GLF_IDENTITY(mat4(1.0) * (vec4(2633.5611, -5009.4714, 15.12, 980.854) + vec4(-0.4, -4.3, -8036.2389, -42.58)), clamp(mat4(1.0) * (vec4(2633.5611, -5009.4714, 15.12, 980.854) + vec4(-0.4, -4.3, -8036.2389, -42.58)), mat4(1.0) * (vec4(2633.5611, -5009.4714, 15.12, 980.854) + vec4(-0.4, -4.3, -8036.2389, -42.58)), mat4(1.0) * (vec4(2633.5611, -5009.4714, 15.12, 980.854) + _GLF_IDENTITY(vec4(-0.4, -4.3, -8036.2389, -42.58), max(vec4(-0.4, -4.3, -8036.2389, -42.58), vec4(-0.4, -4.3, -8036.2389, -42.58)))))))));
     }
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       if(_GLF_IDENTITY(_GLF_DEAD(false), (_GLF_DEAD(false)) || false))
        {
         _GLF_color = _GLF_IDENTITY(vec4(_GLF_IDENTITY(-5774.6682, float(mat3x4(-5774.6682, 0.0, 1.0, determinant(mat4(1.0, 0.0, _GLF_ZERO(0.0, injectionSwitch.x), log(1.0), 0.0, 1.0, _GLF_IDENTITY(dot(vec2(1.0, 0.0), vec2(0.0, 1.0)), dot(vec2(1.0, 0.0), vec2(0.0, 1.0))), 1.0, 0.0, _GLF_IDENTITY(0.0, clamp(0.0, _GLF_IDENTITY(0.0, max(0.0, 0.0)), _GLF_IDENTITY(0.0, float(mat4(0.0, _GLF_ZERO(0.0, injectionSwitch.x), 1.0, 0.0, 1.0, 1.0, 0.0, abs(0.0), 1.0, 1.0, 0.0, sqrt(0.0), 0.0, 1.0, 0.0, 1.0))))), 1.0, 1.0, 0.0, 0.0, 0.0, 1.0)), 0.0, _GLF_IDENTITY(1.0, mix(float(_GLF_FUZZED(-4.6)), float(1.0), _GLF_IDENTITY(bool(true), bool(bool(bool(true)))))), 0.0, 1.0, 0.0, abs(0.0), log(1.0), 0.0))), -0.6, 5.3, 9.2), (vec4(_GLF_IDENTITY(-5774.6682, float(mat3x4(-5774.6682, 0.0, 1.0, determinant(mat4(1.0, 0.0, _GLF_ZERO(0.0, injectionSwitch.x), log(1.0), 0.0, 1.0, _GLF_IDENTITY(dot(vec2(1.0, 0.0), vec2(0.0, 1.0)), dot(vec2(1.0, 0.0), vec2(0.0, 1.0))), 1.0, 0.0, _GLF_IDENTITY(0.0, clamp(0.0, _GLF_IDENTITY(0.0, max(0.0, 0.0)), _GLF_IDENTITY(0.0, float(mat4(0.0, _GLF_ZERO(0.0, injectionSwitch.x), 1.0, 0.0, 1.0, 1.0, 0.0, abs(0.0), 1.0, 1.0, 0.0, sqrt(0.0), 0.0, 1.0, 0.0, 1.0))))), 1.0, 1.0, 0.0, 0.0, 0.0, 1.0)), 0.0, _GLF_IDENTITY(1.0, mix(float(_GLF_FUZZED(-4.6)), float(1.0), _GLF_IDENTITY(bool(true), bool(bool(bool(true)))))), 0.0, 1.0, 0.0, abs(0.0), log(1.0), 0.0))), -0.6, 5.3, 9.2)) * vec4(1.0, 1.0, 1.0, 1.0));
        }
       _GLF_color = ((mat4(308.332, -513.110, -8.0, -5.5, 9469.3788, 35.55, -2704.6801, -28.37, 701.338, 97.11, -17.95, 3.5, 64.33, -4.8, 9.8, -706.368) != mat4(6736.1329, -286.825, _GLF_IDENTITY(-1128.6938, min(_GLF_IDENTITY(-1128.6938, (true ? -1128.6938 : _GLF_FUZZED(-9.1))), -1128.6938)), -54.12, 1.9, 29.67, 408.934, 1.8, -5.6, -1.6, 425.591, -6.0, 2.1, -7873.7351, -551.434, -1.2)) ? vec4(5167.4803, -993.716, -23.49, 8.6) : vec4(-56.11, _GLF_IDENTITY(1.9, min(1.9, 1.9)), -161.873, -88.48));
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
  else
   {
    if(_GLF_DEAD(false))
     return 1.0;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = _GLF_IDENTITY(vec4(65.31), clamp(_GLF_IDENTITY(vec4(65.31), (true ? vec4(65.31) : _GLF_FUZZED(vec4(-4.9, 7.0, -78.17, -8814.0178)))), _GLF_IDENTITY(vec4(65.31), min(vec4(65.31), vec4(65.31))), vec4(65.31)));
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= _GLF_IDENTITY(0.0, max(0.0, 0.0))))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    if(_GLF_DEAD(false))
     {
      if(_GLF_DEAD(false))
       return 1.0;
      for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
       {
        return 1.0;
       }
     }
    if(_GLF_IDENTITY(_GLF_DEAD(false), true && (_GLF_IDENTITY(_GLF_DEAD(false), true && (_GLF_DEAD(false))))))
     return 1.0;
   }
  {
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = mod(vec4(-6.3, 6.2, -3229.7956, -8.0), -792.594);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   if(_GLF_DEAD(false))
    return 1.0;
   _GLF_color = vec4(847.128, 6947.4905, 7204.9647, -81.21);
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
 }
 float th = _GLF_IDENTITY((0.97 - 0.19 * z * z), _GLF_IDENTITY(max(_GLF_IDENTITY((0.97 - 0.19 * z * z), ((0.97 - 0.19 * z * z)) - 0.0), _GLF_IDENTITY((_GLF_IDENTITY(0.97 - 0.19 * _GLF_IDENTITY(z, max(z, _GLF_IDENTITY(z, (true ? z : _GLF_FUZZED(z))))) * z, _GLF_IDENTITY(max(_GLF_IDENTITY(0.97 - 0.19 * _GLF_IDENTITY(z, max(z, _GLF_IDENTITY(z, (true ? z : _GLF_FUZZED(z))))) * z, float(vec4(0.97 - 0.19 * _GLF_IDENTITY(z, max(z, _GLF_IDENTITY(z, (true ? z : _GLF_FUZZED(z))))) * z, abs(0.0), 1.0, tan(0.0)))), 0.97 - 0.19 * _GLF_IDENTITY(z, max(z, _GLF_IDENTITY(z, (true ? z : _GLF_FUZZED(z))))) * z), mix(float(_GLF_FUZZED(16.14)), float(max(_GLF_IDENTITY(0.97 - 0.19 * _GLF_IDENTITY(z, max(z, _GLF_IDENTITY(z, (true ? z : _GLF_FUZZED(z))))) * z, float(vec4(0.97 - 0.19 * _GLF_IDENTITY(z, max(z, _GLF_IDENTITY(z, (true ? z : _GLF_FUZZED(z))))) * z, abs(0.0), 1.0, tan(0.0)))), 0.97 - 0.19 * _GLF_IDENTITY(z, max(z, _GLF_IDENTITY(z, (true ? z : _GLF_FUZZED(z))))) * z)), bool(true))))), ((_GLF_IDENTITY(_GLF_IDENTITY(0.97, _GLF_IDENTITY((0.97) / cos(0.0), ((0.97) / cos(0.0)) - tan(0.0))) - 0.19 * z * z, _GLF_IDENTITY((_GLF_IDENTITY(0.97 - _GLF_IDENTITY(_GLF_IDENTITY(0.19, (_GLF_IDENTITY(0.19, min(_GLF_IDENTITY(0.19, (true ? 0.19 : _GLF_FUZZED(625.072))), 0.19))) / 1.0), clamp(_GLF_IDENTITY(0.19, (_GLF_IDENTITY(0.19, min(_GLF_IDENTITY(0.19, (true ? 0.19 : _GLF_FUZZED(625.072))), 0.19))) / 1.0), _GLF_IDENTITY(0.19, (_GLF_IDENTITY(0.19, min(_GLF_IDENTITY(0.19, (true ? 0.19 : _GLF_FUZZED(625.072))), 0.19))) / 1.0), _GLF_IDENTITY(0.19, (_GLF_IDENTITY(0.19, min(_GLF_IDENTITY(0.19, (true ? 0.19 : _GLF_FUZZED(625.072))), 0.19))) / 1.0))) * z * z, mix(float(0.97 - _GLF_IDENTITY(0.19 * z, max(0.19 * _GLF_IDENTITY(z, mix(float(_GLF_FUZZED(586.416)), float(z), bool(true))), 0.19 * z)) * z), float(_GLF_FUZZED(7.8)), bool(false)))), float(mat2x3((_GLF_IDENTITY(0.97 - 0.19 * z * z, mix(float(0.97 - 0.19 * z * _GLF_IDENTITY(z, _GLF_IDENTITY(float(_GLF_IDENTITY(mat2x4(z, 1.0, 1.0, determinant(mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, round(length(normalize(vec2(1.0, 1.0)))), 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0)), abs(1.0), 1.0, _GLF_ZERO(0.0, injectionSwitch.x), sqrt(1.0)), transpose(transpose(_GLF_IDENTITY(mat2x4(z, 1.0, 1.0, determinant(mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, round(length(normalize(vec2(1.0, 1.0)))), 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0)), abs(1.0), 1.0, _GLF_ZERO(0.0, injectionSwitch.x), sqrt(1.0)), mat4(1.0) * (mat2x4(z, 1.0, 1.0, determinant(mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, round(length(normalize(vec2(1.0, 1.0)))), 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0)), abs(1.0), 1.0, _GLF_ZERO(0.0, injectionSwitch.x), sqrt(1.0)))))))), mix(float(_GLF_FUZZED(9470.3948)), float(_GLF_IDENTITY(float(_GLF_IDENTITY(mat2x4(z, 1.0, 1.0, determinant(mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, round(length(normalize(vec2(1.0, 1.0)))), 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0)), abs(1.0), 1.0, _GLF_ZERO(0.0, injectionSwitch.x), sqrt(1.0)), transpose(transpose(_GLF_IDENTITY(mat2x4(z, 1.0, 1.0, determinant(mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, round(length(normalize(vec2(1.0, 1.0)))), 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0)), abs(1.0), 1.0, _GLF_ZERO(0.0, injectionSwitch.x), sqrt(1.0)), mat4(1.0) * (mat2x4(z, 1.0, 1.0, determinant(mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, round(length(normalize(vec2(1.0, 1.0)))), 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0)), abs(1.0), 1.0, _GLF_ZERO(0.0, injectionSwitch.x), sqrt(1.0)))))))), clamp(float(_GLF_IDENTITY(mat2x4(z, 1.0, 1.0, determinant(mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, round(length(normalize(vec2(1.0, 1.0)))), 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0)), abs(1.0), 1.0, _GLF_ZERO(0.0, injectionSwitch.x), sqrt(1.0)), transpose(transpose(_GLF_IDENTITY(mat2x4(z, 1.0, 1.0, determinant(mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, round(length(normalize(vec2(1.0, 1.0)))), 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0)), abs(1.0), 1.0, _GLF_ZERO(0.0, injectionSwitch.x), sqrt(1.0)), mat4(1.0) * (mat2x4(z, 1.0, 1.0, determinant(mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, round(length(normalize(vec2(1.0, 1.0)))), 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0)), abs(1.0), 1.0, _GLF_ZERO(0.0, injectionSwitch.x), sqrt(1.0)))))))), float(_GLF_IDENTITY(mat2x4(z, 1.0, 1.0, determinant(mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, round(length(normalize(vec2(1.0, 1.0)))), 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0)), abs(1.0), 1.0, _GLF_ZERO(0.0, injectionSwitch.x), sqrt(1.0)), transpose(transpose(_GLF_IDENTITY(mat2x4(z, 1.0, 1.0, determinant(mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, round(length(normalize(vec2(1.0, 1.0)))), 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0)), abs(1.0), 1.0, _GLF_ZERO(0.0, injectionSwitch.x), sqrt(1.0)), mat4(1.0) * (mat2x4(z, 1.0, 1.0, determinant(mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, round(length(normalize(vec2(1.0, 1.0)))), 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0)), abs(1.0), 1.0, _GLF_ZERO(0.0, injectionSwitch.x), sqrt(1.0)))))))), float(_GLF_IDENTITY(mat2x4(z, 1.0, 1.0, determinant(mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, round(length(normalize(vec2(1.0, 1.0)))), 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0)), abs(1.0), 1.0, _GLF_ZERO(0.0, injectionSwitch.x), sqrt(1.0)), transpose(transpose(_GLF_IDENTITY(mat2x4(z, 1.0, 1.0, determinant(mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, round(length(normalize(vec2(1.0, 1.0)))), 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0)), abs(1.0), 1.0, _GLF_ZERO(0.0, injectionSwitch.x), sqrt(1.0)), mat4(1.0) * (mat2x4(z, 1.0, 1.0, determinant(mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, round(length(normalize(vec2(1.0, 1.0)))), 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0)), abs(1.0), 1.0, _GLF_ZERO(0.0, injectionSwitch.x), sqrt(1.0))))))))))), bool(true))))), float(_GLF_FUZZED(7.8)), bool(false)))), 1.0, 1.0, 0.0, 0.0, exp(0.0)))) - length(0.0)))) * 1.0)), min(max((0.97 - 0.19 * z * z), _GLF_IDENTITY((0.97 - 0.19 * _GLF_IDENTITY(z, max(z, _GLF_IDENTITY(z, (true ? z : _GLF_FUZZED(z))))) * z), ((_GLF_IDENTITY(0.97 - 0.19 * z * z, _GLF_IDENTITY((_GLF_IDENTITY(0.97 - 0.19 * z * z, mix(float(0.97 - 0.19 * z * z), float(_GLF_FUZZED(7.8)), bool(false)))), float(mat2x3((_GLF_IDENTITY(_GLF_IDENTITY(0.97 - 0.19 * z * z, (false ? _GLF_FUZZED(z) : _GLF_IDENTITY(0.97 - 0.19 * z * z, min(0.97 - 0.19 * z * z, 0.97 - 0.19 * z * z)))), mix(float(_GLF_IDENTITY(0.97, mix(float(0.97), float(_GLF_FUZZED(73.49)), bool(false))) - 0.19 * z * z), float(_GLF_FUZZED(7.8)), bool(false)))), 1.0, 1.0, _GLF_IDENTITY(0.0, min(_GLF_IDENTITY(0.0, clamp(0.0, _GLF_IDENTITY(0.0, _GLF_IDENTITY(0.0 + (0.0), mix(float(_GLF_FUZZED(5902.4685)), float(0.0 + (0.0)), bool(true)))), 0.0)), 0.0)), 0.0, exp(0.0)))) - length(0.0)))) * 1.0)), max((0.97 - _GLF_IDENTITY(0.19 * _GLF_IDENTITY(z, mix(float(_GLF_FUZZED(-5612.0265)), float(z), bool(true))) * z, max(_GLF_IDENTITY(0.19 * _GLF_IDENTITY(z, mix(float(_GLF_FUZZED(-5612.0265)), float(z), bool(true))) * z, min(0.19 * _GLF_IDENTITY(z, mix(float(_GLF_FUZZED(-5612.0265)), float(z), bool(true))) * z, 0.19 * _GLF_IDENTITY(z, mix(float(_GLF_FUZZED(-5612.0265)), float(z), bool(true))) * z)), 0.19 * _GLF_IDENTITY(z, mix(float(_GLF_FUZZED(-5612.0265)), float(z), bool(true))) * z))), _GLF_IDENTITY(_GLF_IDENTITY((0.97 - _GLF_IDENTITY(0.19 * _GLF_IDENTITY(z, max(z, _GLF_IDENTITY(_GLF_IDENTITY(z, min(z, z)), (true ? z : _GLF_FUZZED(z))))) * z, sqrt(0.0) + (0.19 * _GLF_IDENTITY(z, max(z, _GLF_IDENTITY(_GLF_IDENTITY(z, min(z, z)), (true ? z : _GLF_FUZZED(z))))) * z))), max((0.97 - _GLF_IDENTITY(0.19 * _GLF_IDENTITY(z, max(z, _GLF_IDENTITY(_GLF_IDENTITY(z, min(z, z)), (true ? z : _GLF_FUZZED(z))))) * z, sqrt(0.0) + (0.19 * _GLF_IDENTITY(z, max(z, _GLF_IDENTITY(_GLF_IDENTITY(z, min(z, z)), (true ? z : _GLF_FUZZED(z))))) * z))), _GLF_IDENTITY((0.97 - _GLF_IDENTITY(0.19 * _GLF_IDENTITY(z, max(z, _GLF_IDENTITY(_GLF_IDENTITY(z, min(z, z)), (true ? z : _GLF_FUZZED(z))))) * z, sqrt(0.0) + (0.19 * _GLF_IDENTITY(z, max(z, _GLF_IDENTITY(_GLF_IDENTITY(z, min(z, z)), (true ? z : _GLF_FUZZED(z))))) * z))), min((0.97 - _GLF_IDENTITY(0.19 * _GLF_IDENTITY(z, max(z, _GLF_IDENTITY(_GLF_IDENTITY(z, min(z, z)), (true ? z : _GLF_FUZZED(z))))) * z, sqrt(0.0) + (0.19 * _GLF_IDENTITY(z, max(z, _GLF_IDENTITY(_GLF_IDENTITY(z, min(z, z)), (true ? z : _GLF_FUZZED(z))))) * z))), (0.97 - _GLF_IDENTITY(0.19 * _GLF_IDENTITY(z, max(z, _GLF_IDENTITY(_GLF_IDENTITY(z, min(z, z)), (true ? z : _GLF_FUZZED(z))))) * z, sqrt(0.0) + (0.19 * _GLF_IDENTITY(z, max(z, _GLF_IDENTITY(_GLF_IDENTITY(z, min(z, z)), (true ? z : _GLF_FUZZED(z))))) * z))))))), ((_GLF_IDENTITY(0.97 - 0.19 * z * z, _GLF_IDENTITY((_GLF_IDENTITY(0.97 - 0.19 * z * z, mix(float(0.97 - _GLF_IDENTITY(0.19 * z * _GLF_IDENTITY(z, mix(float(_GLF_IDENTITY(z, max(z, z))), float(_GLF_FUZZED(-51.42)), bool(false))), _GLF_IDENTITY(float(vec2(0.19 * z * _GLF_IDENTITY(z, mix(float(_GLF_IDENTITY(z, max(z, z))), float(_GLF_FUZZED(-51.42)), bool(false))), 0.0)), mix(float(float(vec2(0.19 * z * _GLF_IDENTITY(z, mix(float(_GLF_IDENTITY(z, max(z, z))), float(_GLF_FUZZED(-51.42)), bool(false))), 0.0))), float(_GLF_FUZZED(-44.06)), bool(false))))), float(_GLF_FUZZED(7.8)), bool(false)))), float(mat2x3((_GLF_IDENTITY(0.97 - 0.19 * z * z, mix(float(0.97 - 0.19 * z * z), float(_GLF_FUZZED(7.8)), bool(false)))), 1.0, 1.0, 0.0, 0.0, exp(0.0)))) - length(0.0)))) * 1.0))))) * z * pi2;
 if(_GLF_DEAD(false))
  return _GLF_IDENTITY(1.0, max(1.0, 1.0));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = fwidth(intBitsToFloat(ivec4(-13391, -5707, -94629, 60609)));
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-1.2, -0.6, -8.3, -3700.6541);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_IDENTITY(_GLF_color = _GLF_outVarBackup_GLF_color, abs(cos(vec4(0.0, 0.0, 0.0, 0.0))) * (_GLF_IDENTITY(_GLF_color = _GLF_outVarBackup_GLF_color, (_GLF_color = _GLF_outVarBackup_GLF_color) / vec4(1.0, 1.0, 1.0, 1.0))));
     }
   }
   if(_GLF_DEAD(false))
    return 1.0;
   {
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
     return 1.0;
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = fract(fwidth(vec4(9.2, 3.0, -9.6, 26.31)));
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = smoothstep(-783.739, 7.5, vec4(-88.63, 5.0, 665.226, -826.648));
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  return 1.0;
 if(_GLF_DEAD(false))
  return 1.0;
 if(a.y < _GLF_IDENTITY(a.x, clamp(a.x, a.x, a.x)))
  {
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (_GLF_IDENTITY(false, (false) || false))))))
      return 1.0;
     return 1.0;
    }
   th = 0.5 - th;
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.x < 0.0, (_GLF_IDENTITY(gl_FragCoord.x < 0.0, bool(bool(gl_FragCoord.x < 0.0)))) && true)))))
     return 1.0;
    _GLF_color = vec4(3.3, -1.3, _GLF_IDENTITY(-26.79, clamp(-26.79, -26.79, -26.79)), -97.50);
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
     {
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
      else
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
         return 1.0;
       }
     }
   }
  }
 if(_GLF_IDENTITY(v, max(v, v)).x < 0.0)
  {
   if(_GLF_DEAD(_GLF_FALSE(_GLF_IDENTITY(false, _GLF_TRUE(true, (gl_FragCoord.y >= _GLF_IDENTITY(0.0, mix(float(_GLF_IDENTITY(0.0, (_GLF_IDENTITY(0.0, min(0.0, 0.0))) - 0.0)), float(_GLF_FUZZED(46.43)), bool(false))))) && (false)), (injectionSwitch.x > injectionSwitch.y))))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = dFdy(vec4(9.7, 3.7, 7.2, -911.113));
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = (vec4(85.54, 926.551, 46.10, -92.72) * vec4(8.7, 0.2, 37.81, 50.26));
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(_GLF_IDENTITY(true, (_GLF_IDENTITY(true, (true) || false)) && true), (gl_FragCoord.y >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
      }
     return 1.0;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = (vec4(-452.070, _GLF_IDENTITY(879.406, max(_GLF_IDENTITY(879.406, (true ? 879.406 : _GLF_FUZZED(pi2))), 879.406)), 82.39, -22.72) + vec4(170.916, 3.3, 6.6, _GLF_IDENTITY(-37.80, (false ? _GLF_FUZZED(z) : -37.80))));
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
    }
   {
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < length(vec3(0.0, 0.0, 0.0))))))
     return 1.0;
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = min(vec4(_GLF_IDENTITY(118.444, (_GLF_IDENTITY(118.444, min(118.444, 118.444))) / 1.0), _GLF_IDENTITY(-90.34, mix(float(_GLF_FUZZED(69.95)), float(-90.34), bool(true))), 4046.9929, 666.185), vec4(-3.3, 353.009, -358.357, -7912.9526));
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = (exp2(25.98) / vec4(1474.3789, -1.8, 341.506, 8.1));
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    if(_GLF_DEAD(_GLF_IDENTITY(false, false || (false))))
     return 1.0;
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
     {
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(-61.81, -55.34, -5.3, -9.8);
       }
      _GLF_color = _GLF_IDENTITY(_GLF_outVarBackup_GLF_color, vec4(_GLF_outVarBackup_GLF_color[0], _GLF_outVarBackup_GLF_color[1], _GLF_outVarBackup_GLF_color[2], _GLF_outVarBackup_GLF_color[3]));
     }
    if(_GLF_DEAD(false))
     return 1.0;
   }
   th = 1.0 - _GLF_IDENTITY(th, clamp(th, th, th));
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
    {
     if(_GLF_DEAD(false))
      return 1.0;
     vec4 _GLF_outVarBackup_GLF_color;
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < determinant(mat4(0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, log(1.0), 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0))))))
      return 1.0;
     for(int _injected_loop_counter = 1; _GLF_WRAPPED_LOOP(_injected_loop_counter > int(_GLF_ZERO(0.0, injectionSwitch.x))); _injected_loop_counter --)
      {
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(_GLF_IDENTITY(317.447, max(_GLF_IDENTITY(317.447, (317.447) + 0.0), 317.447)), -231.711, -4.2, 22.68);
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       _GLF_outVarBackup_GLF_color = _GLF_color;
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = min(vec4(-6.4, -5366.2032, -103.708, -622.395), abs(vec4(-0.1, -1.4, 72.41, 6705.8604)));
       if(_GLF_DEAD(false))
        return 1.0;
      }
     if(_GLF_DEAD(false))
      {
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = faceforward(vec4(-6.7, -9765.2083, -569.885, 481.318), vec4(-6310.6428, 1.3, 639.849, 6696.1657), vec4(7.1, -9.4, 0.5, -72.91));
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       {
        vec4 _GLF_outVarBackup_GLF_color;
        if(_GLF_DEAD(false))
         return 1.0;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(48.03, 47.62, -4.2, 3781.0682);
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       if(_GLF_DEAD(false))
        return 1.0;
       return 1.0;
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = sign(vec4(-6590.7583, -3.0, 8.3, 954.478));
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        return 1.0;
      }
     _GLF_color = vec4(-41.48, -39.39, _GLF_IDENTITY(18.17, min(18.17, 18.17)), -2.4);
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_IDENTITY(_GLF_color, _GLF_IDENTITY(min(_GLF_color, _GLF_IDENTITY(_GLF_color, max(_GLF_color, _GLF_color))), (min(_GLF_color, _GLF_IDENTITY(_GLF_color, max(_GLF_color, _GLF_color)))) * vec4(1.0, 1.0, 1.0, 1.0)));
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       {
        _GLF_color = vec4(139.204);
       }
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-2685.4858, 62.80, -314.722, -2.9);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      _GLF_color = (vec4(3.7, -43.86, 6.4, -7763.7995) + vec4(-6.2, 6.8, -82.79, 611.109));
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-37.36, 931.323, -569.151, 50.69);
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      if(_GLF_DEAD(false))
       {
        if(_GLF_DEAD(false))
         return 1.0;
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4((dot(5.6, -3.8) * -6204.9928), vec3(91.72, 256.847, -64.84));
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        _GLF_color = atanh(vec4(946.452, -63.76, 5.2, 8.8));
       }
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (_GLF_IDENTITY(injectionSwitch, max(_GLF_IDENTITY(injectionSwitch, (injectionSwitch) / vec2(_GLF_ONE(1.0, injectionSwitch.y), _GLF_ONE(1.0, injectionSwitch.y))), _GLF_IDENTITY(injectionSwitch, (injectionSwitch) * mat2(1.0)))).x < injectionSwitch.y))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(-9087.6326, 47.46, -44.41, -6.4);
         if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(_GLF_TRUE(true, (gl_FragCoord.y >= sqrt(0.0))), true && (_GLF_IDENTITY(_GLF_TRUE(true, (gl_FragCoord.y >= sqrt(0.0))), bool(bvec3(_GLF_IDENTITY(_GLF_TRUE(true, (gl_FragCoord.y >= sqrt(0.0))), (_GLF_TRUE(true, (gl_FragCoord.y >= sqrt(0.0)))) && true), true, false)))))))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         {
          _GLF_color = _GLF_IDENTITY(ceil((length(vec2(-5285.1867, -94.08)) / degrees(vec4(_GLF_IDENTITY(61.37, clamp(61.37, _GLF_IDENTITY(61.37, mix(float(_GLF_FUZZED(-98.40)), float(_GLF_IDENTITY(61.37, _GLF_IDENTITY(float(vec2(61.37, 1.0)), float(_GLF_IDENTITY(mat4(float(vec2(61.37, 1.0)), tan(0.0), 1.0, round(length(normalize(vec3(1.0, 1.0, 1.0)))), 0.0, sqrt(1.0), 1.0, 0.0, 0.0, 0.0, abs(0.0), 1.0, 1.0, 0.0, 0.0, 1.0), transpose(transpose(mat4(float(vec2(61.37, 1.0)), tan(0.0), 1.0, round(length(normalize(vec3(1.0, 1.0, 1.0)))), 0.0, sqrt(1.0), 1.0, 0.0, 0.0, 0.0, abs(0.0), 1.0, 1.0, 0.0, 0.0, 1.0)))))))), bool(true))), 61.37)), -972.127, -4.4, 8.9)))), (ceil((length(vec2(-5285.1867, -94.08)) / degrees(vec4(_GLF_IDENTITY(61.37, clamp(61.37, _GLF_IDENTITY(61.37, mix(float(_GLF_FUZZED(-98.40)), float(_GLF_IDENTITY(61.37, float(vec2(61.37, 1.0)))), bool(true))), 61.37)), -972.127, -4.4, 8.9))))) / vec4(1.0, 1.0, 1.0, 1.0));
          {
           if(_GLF_DEAD(false))
            {
             {
              vec4 _GLF_outVarBackup_GLF_color;
              _GLF_outVarBackup_GLF_color = _GLF_color;
              _GLF_color = (vec2(56.26, -5.5) * mat4x2(-8.0, 4.9, -97.01, 86.79, -9.2, -867.570, 28.41, -20.27));
              if(_GLF_WRAPPED_IF_TRUE(true))
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
             }
             return 1.0;
            }
           vec4 _GLF_outVarBackup_GLF_color;
           _GLF_outVarBackup_GLF_color = _GLF_color;
           _GLF_color = vec4(3.2, -25.38, 4570.8795, 3.7);
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, _GLF_IDENTITY((gl_FragCoord.y >= 0.0), bool(bvec3((gl_FragCoord.y >= 0.0), true, false))))))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
          }
          if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
           return 1.0;
         }
       }
     }
     {
      vec4 _GLF_outVarBackup_GLF_color;
      if(_GLF_DEAD(false))
       return 1.0;
      if(_GLF_DEAD(_GLF_IDENTITY(_GLF_IDENTITY(false, (false) && true), _GLF_IDENTITY(bool(bvec3(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(false, (false) && true), ! (_GLF_IDENTITY(! (_GLF_IDENTITY(_GLF_IDENTITY(false, (false) && true), ! (! (_GLF_IDENTITY(false, (false) && true))))), bool(bvec3(! (_GLF_IDENTITY(_GLF_IDENTITY(false, _GLF_IDENTITY((false) && true, bool(_GLF_IDENTITY(bvec3((false) && true, false, _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))), _GLF_IDENTITY(bvec3(bvec4(bvec3((false) && true, false, _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))), false)), bvec3(bvec4(bvec3(bvec4(bvec3((false) && true, false, _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))), false)), true))))))), ! (! (_GLF_IDENTITY(false, (false) && true))))), _GLF_FALSE(false, (gl_FragCoord.y < 0.0)), false))))), (_GLF_IDENTITY(false, (false) && true)) || false), true, true)), true && (_GLF_IDENTITY(bool(bvec3(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(false, (false) && true), ! (_GLF_IDENTITY(! (_GLF_IDENTITY(_GLF_IDENTITY(false, (false) && true), ! (! (_GLF_IDENTITY(false, (false) && true))))), bool(bvec3(! (_GLF_IDENTITY(_GLF_IDENTITY(false, _GLF_IDENTITY((false) && true, bool(_GLF_IDENTITY(bvec3((false) && true, false, _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))), _GLF_IDENTITY(bvec3(bvec4(bvec3((false) && true, false, _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))), false)), bvec3(bvec4(bvec3(bvec4(bvec3((false) && true, false, _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))), false)), true))))))), ! (! (_GLF_IDENTITY(false, (false) && true))))), _GLF_FALSE(false, (gl_FragCoord.y < 0.0)), false))))), (_GLF_IDENTITY(false, (false) && true)) || false), true, true)), ! (! (bool(bvec3(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(false, (false) && true), ! (_GLF_IDENTITY(! (_GLF_IDENTITY(_GLF_IDENTITY(false, (false) && true), ! (! (_GLF_IDENTITY(false, (false) && true))))), bool(bvec3(! (_GLF_IDENTITY(_GLF_IDENTITY(false, _GLF_IDENTITY((false) && true, bool(_GLF_IDENTITY(bvec3((false) && true, false, _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))), _GLF_IDENTITY(bvec3(bvec4(bvec3((false) && true, false, _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))), false)), bvec3(bvec4(bvec3(bvec4(bvec3((false) && true, false, _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))), false)), true))))))), ! (! (_GLF_IDENTITY(false, (false) && true))))), _GLF_FALSE(false, (gl_FragCoord.y < 0.0)), false))))), (_GLF_IDENTITY(false, (false) && true)) || false), true, true))))))))))
       {
        if(_GLF_DEAD(false))
         return 1.0;
        _GLF_color = vec4(-8.5, -4.9, 48.36, -1.5);
       }
      if(_GLF_IDENTITY(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))), bool(bvec2(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))), true))))
       {
       }
      else
       {
        _GLF_outVarBackup_GLF_color = _GLF_color;
       }
      if(_GLF_DEAD(false))
       return 1.0;
      if(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_DEAD(false), false || (_GLF_DEAD(false))), bool(bvec3(_GLF_IDENTITY(_GLF_DEAD(false), bool(bvec4(_GLF_DEAD(false), _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)), true, true))), true, false))))
       {
        _GLF_color = tanh(vec4(_GLF_IDENTITY(-1605.0114, mix(float(_GLF_IDENTITY(-1605.0114, _GLF_IDENTITY((-1605.0114), ((-1605.0114)) / exp(0.0)) - 0.0)), float(_GLF_FUZZED(7.2)), bool(false))), 9261.1216, -7.3, -62.99));
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_IDENTITY(_GLF_outVarBackup_GLF_color = _GLF_color, (_GLF_IDENTITY(_GLF_outVarBackup_GLF_color = _GLF_color, (_GLF_IDENTITY(_GLF_outVarBackup_GLF_color = _GLF_color, _GLF_IDENTITY((_GLF_outVarBackup_GLF_color = _GLF_color) / vec4(1.0, 1.0, 1.0, 1.0), (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(vec4(-4.9, 2301.5595, 576.769, 8.8)) : (_GLF_outVarBackup_GLF_color = _GLF_color) / vec4(1.0, 1.0, 1.0, 1.0))))) * vec4(1.0, 1.0, 1.0, 1.0))) + vec4(0.0, 0.0, 0.0, 0.0));
         _GLF_color = vec4(9367.6992, 4366.9791, -0.4, -7470.9350);
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           if(_GLF_DEAD(false))
            return 1.0;
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = abs(vec4(-142.720, -2.4, -4745.7883, 75.31));
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
       }
      _GLF_color = vec4(_GLF_IDENTITY(_GLF_IDENTITY(-5.1, max(-5.1, -5.1)), (-5.1) / 1.0), 8.2, -2.0, -2923.9638);
      if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord.x < 0.0, _GLF_IDENTITY(true && (_GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord.x, (_GLF_IDENTITY(gl_FragCoord.x, (gl_FragCoord.x) - 0.0)) - 0.0) < 0.0, false || (_GLF_IDENTITY(gl_FragCoord.x < 0.0, true && (gl_FragCoord.x < 0.0))))), ! (! (true && (_GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord.x, (_GLF_IDENTITY(gl_FragCoord.x, (gl_FragCoord.x) - 0.0)) - 0.0) < 0.0, false || (_GLF_IDENTITY(gl_FragCoord.x < 0.0, true && (gl_FragCoord.x < 0.0))))))))), (_GLF_IDENTITY(gl_FragCoord.x < 0.0, _GLF_IDENTITY(true, false || (_GLF_IDENTITY(true, ! (_GLF_IDENTITY(! (_GLF_IDENTITY(true, false || (true))), true && (! (_GLF_IDENTITY(true, false || (true))))))))) && (_GLF_IDENTITY(gl_FragCoord.x < 0.0, false || (_GLF_IDENTITY(gl_FragCoord.x < 0.0, _GLF_IDENTITY(true && (gl_FragCoord.x < 0.0), (_GLF_IDENTITY(true && (gl_FragCoord.x < 0.0), (true && (gl_FragCoord.x < 0.0)) || false)) && true))))))) && true)))))
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord, (gl_FragCoord) * vec4(1.0, 1.0, _GLF_IDENTITY(1.0, float(vec2(1.0, 1.0))), 1.0)).x < _GLF_IDENTITY(0.0, mix(_GLF_IDENTITY(float(0.0), float(_GLF_IDENTITY(mat2x4(float(0.0), 1.0, 1.0, _GLF_ZERO(0.0, injectionSwitch.x), 0.0, _GLF_IDENTITY(1.0, (_GLF_FALSE(false, (gl_FragCoord.y < 0.0)) ? _GLF_FUZZED((pi2)) : 1.0)), 0.0, 1.0), (false ? _GLF_FUZZED(mat2x4(mat3(94.58, 8.4, 39.79, -43.99, -5.9, 4.3, -8.1, 7.5, -795.816))) : mat2x4(float(0.0), 1.0, 1.0, _GLF_ZERO(0.0, injectionSwitch.x), 0.0, 1.0, 0.0, 1.0))))), float(_GLF_FUZZED(-901.078)), bool(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)))))))))
         {
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
           return 1.0;
          return 1.0;
         }
        return 1.0;
       }
      if(_GLF_DEAD(false))
       return 1.0;
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_ZERO(0.0, injectionSwitch.x)))))
         return 1.0;
        _GLF_color = _GLF_IDENTITY(_GLF_outVarBackup_GLF_color, _GLF_IDENTITY((_GLF_FALSE(false, (gl_FragCoord.y < 0.0)) ? _GLF_FUZZED(vec4(8.2, 812.940, 60.74, -3.3)) : _GLF_IDENTITY(_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color)), min(_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color)), _GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, vec4(mat2(_GLF_outVarBackup_GLF_color))), min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color)), mat4(1.0) * (_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color))))))), mix(vec4(_GLF_FUZZED(-30.98), ((_GLF_FALSE(false, (gl_FragCoord.y < 0.0)) ? _GLF_FUZZED(vec4(8.2, 812.940, 60.74, -3.3)) : _GLF_IDENTITY(_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color)), min(_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color)), _GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, vec4(mat2(_GLF_outVarBackup_GLF_color))), min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color)), mat4(1.0) * (_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color))))))))[1], ((_GLF_FALSE(false, (gl_FragCoord.y < 0.0)) ? _GLF_FUZZED(vec4(8.2, 812.940, 60.74, -3.3)) : _GLF_IDENTITY(_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color)), min(_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color)), _GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, vec4(mat2(_GLF_outVarBackup_GLF_color))), min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color)), mat4(1.0) * (_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color))))))))[2], _GLF_FUZZED(-1.0)), vec4(((_GLF_FALSE(false, (gl_FragCoord.y < 0.0)) ? _GLF_FUZZED(vec4(8.2, 812.940, 60.74, -3.3)) : _GLF_IDENTITY(_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color)), min(_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color)), _GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, vec4(mat2(_GLF_outVarBackup_GLF_color))), min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color)), mat4(1.0) * (_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color))))))))[0], _GLF_FUZZED(2.3), _GLF_FUZZED(79.61), ((_GLF_FALSE(false, (gl_FragCoord.y < 0.0)) ? _GLF_FUZZED(vec4(8.2, 812.940, 60.74, -3.3)) : _GLF_IDENTITY(_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color)), min(_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color)), _GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, vec4(mat2(_GLF_outVarBackup_GLF_color))), min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color)), mat4(1.0) * (_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, min(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color))))))))[3]), bvec4(true, false, false, true))));
       }
     }
     if(_GLF_DEAD(_GLF_IDENTITY(false, _GLF_TRUE(true, (gl_FragCoord.x >= 0.0)) && (false))))
      {
       _GLF_color = vec4(-33.73, 5.8, 7.2, 2090.7633);
      }
     if(_GLF_DEAD(_GLF_IDENTITY(false, bool(bvec4(false, true, true, true)))))
      return 1.0;
     if(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (_GLF_IDENTITY(gl_FragCoord.y >= tan(0.0), (gl_FragCoord.y >= tan(0.0)) && true)))), _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) && (_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(_GLF_IDENTITY(true, _GLF_FALSE(false, (gl_FragCoord.x < 0.0)) || (_GLF_IDENTITY(true, bool(bvec3(true, false, true))))), (gl_FragCoord.y >= tan(0.0)))))), ! (! (_GLF_IDENTITY(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (_GLF_IDENTITY(gl_FragCoord.y >= tan(0.0), (gl_FragCoord.y >= tan(0.0)) && true)))), _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) && (_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(_GLF_IDENTITY(true, _GLF_FALSE(false, (gl_FragCoord.x < 0.0)) || (_GLF_IDENTITY(true, bool(bvec3(true, false, true))))), (_GLF_IDENTITY(gl_FragCoord, min(gl_FragCoord, gl_FragCoord)).y >= tan(0.0))))))))), ! (! (_GLF_IDENTITY(_GLF_IDENTITY(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(_GLF_TRUE(true, (_GLF_IDENTITY(gl_FragCoord.y >= tan(0.0), (gl_FragCoord.y >= tan(0.0)) && true))), (_GLF_IDENTITY(_GLF_TRUE(true, (_GLF_IDENTITY(gl_FragCoord.y >= tan(0.0), (gl_FragCoord.y >= tan(0.0)) && true))), _GLF_FALSE(false, (gl_FragCoord.y < 0.0)) || (_GLF_TRUE(true, (_GLF_IDENTITY(gl_FragCoord.y >= tan(0.0), (gl_FragCoord.y >= tan(0.0)) && true)))))) || false)), _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) && (_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(_GLF_IDENTITY(_GLF_IDENTITY(true, (_GLF_IDENTITY(true, (true) || false)) || false), _GLF_FALSE(false, (gl_FragCoord.x < 0.0)) || (_GLF_IDENTITY(true, bool(bvec3(true, false, true))))), (gl_FragCoord.y >= tan(0.0)))))), ! (! (_GLF_IDENTITY(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (_GLF_IDENTITY(gl_FragCoord.y >= tan(0.0), (gl_FragCoord.y >= tan(0.0)) && true)))), _GLF_TRUE(true, (_GLF_IDENTITY(injectionSwitch.x < injectionSwitch.y, ! (! (injectionSwitch.x < injectionSwitch.y))))) && (_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(_GLF_IDENTITY(true, _GLF_FALSE(false, (gl_FragCoord.x < 0.0)) || (_GLF_IDENTITY(true, _GLF_IDENTITY(bool(bvec3(true, false, true)), ! (! (_GLF_IDENTITY(bool(bvec3(true, false, true)), true && (bool(bvec3(true, false, true)))))))))), (gl_FragCoord.y >= tan(0.0)))))))))))))
      {
       _GLF_IDENTITY(_GLF_color = _GLF_outVarBackup_GLF_color, vec4(1.0, 1.0, _GLF_IDENTITY(1.0, clamp(_GLF_IDENTITY(1.0, float(mat2(1.0, 0.0, 0.0, 1.0))), 1.0, 1.0)), 1.0) * (_GLF_color = _GLF_outVarBackup_GLF_color));
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        return _GLF_IDENTITY(1.0, mix(float(_GLF_FUZZED((-7657.9932))), float(1.0), bool(true)));
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(0.6, -4687.1528, 455.212, -72.46);
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(_GLF_IDENTITY(8.7, (8.7) / 1.0), 6258.0453, 1.8, -6.2);
          }
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(7.8, 3.2, -54.46, -6.6);
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         return 1.0;
        }
      }
     {
      vec4 _GLF_outVarBackup_GLF_color;
      if(_GLF_DEAD(false))
       return 1.0;
      if(_GLF_DEAD(false))
       return 1.0;
      _GLF_IDENTITY(_GLF_outVarBackup_GLF_color = _GLF_color, (true ? _GLF_outVarBackup_GLF_color = _GLF_color : _GLF_FUZZED(_GLF_outVarBackup_GLF_color)));
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
       {
        _GLF_color = (vec4(-7587.5428, _GLF_IDENTITY(-653.241, float(vec4(_GLF_IDENTITY(-653.241, float(mat4x2(-653.241, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0))), 1.0, 0.0, 0.0))), _GLF_IDENTITY(655.784, clamp(655.784, 655.784, 655.784)), -992.799) - vec4(-52.51, -80.51, -73.23, -4565.9979));
       }
      _GLF_color = _GLF_IDENTITY(mix(vec4(-48.03, -6150.7996, -97.23, 37.73), (false ? mod(vec4(75.21, -4.4, 2979.4122, 474.591), vec4(7.7, 990.947, 61.55, -512.150)) : vec3(6561.5873, -363.893, -2419.8812).tppp), vec4(70.39, -0.0, -296.968, 1.1)), clamp(mix(vec4(-48.03, -6150.7996, -97.23, 37.73), (false ? mod(vec4(75.21, -4.4, 2979.4122, 474.591), vec4(7.7, 990.947, 61.55, -512.150)) : vec3(6561.5873, _GLF_IDENTITY(-363.893, (-363.893) / 1.0), -2419.8812).tppp), vec4(70.39, -0.0, -296.968, 1.1)), mix(vec4(-48.03, -6150.7996, -97.23, 37.73), (false ? mod(vec4(75.21, -4.4, 2979.4122, 474.591), vec4(7.7, 990.947, 61.55, -512.150)) : vec3(6561.5873, _GLF_IDENTITY(-363.893, (-363.893) / 1.0), -2419.8812).tppp), vec4(70.39, -0.0, -296.968, 1.1)), mix(vec4(-48.03, -6150.7996, -97.23, 37.73), (false ? mod(vec4(75.21, -4.4, 2979.4122, 474.591), vec4(7.7, 990.947, 61.55, -512.150)) : vec3(6561.5873, -363.893, -2419.8812).tppp), vec4(70.39, -0.0, -296.968, 1.1))));
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
       {
        _GLF_color = exp2(vec4(8470.7891, 12.37, 5.3, -1968.0484));
        if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), ! (! (_GLF_FALSE(false, (gl_FragCoord.y < 0.0)))))))
         {
          if(_GLF_DEAD(false))
           return 1.0;
          return 1.0;
         }
        if(_GLF_DEAD(false))
         {
          _GLF_color = vec4(-5.9, _GLF_IDENTITY(-952.601, (_GLF_IDENTITY(-952.601, max(-952.601, -952.601))) + log(1.0)), -6660.7723, 539.846);
         }
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         return 1.0;
       }
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.x, float(mat2(gl_FragCoord.x, 0.0, 1.0, 0.0))) < 0.0))))
         {
          _GLF_color = trunc(vec4(14.47, -8008.9315, -8.0, 335.354));
         }
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = _GLF_IDENTITY(vec4(3.2, -88.54, -8.8, -7.6), (vec4(3.2, -88.54, -8.8, -7.6)) / sqrt(vec4(1.0, 1.0, 1.0, 1.0)));
      }
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = exp(tanh(vec4(-129.755, -506.698, -7231.2092, -1.4)));
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
    }
   else
    {
    }
   {
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     return 1.0;
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-400.924, -9.2, 481.070, -5884.3123);
     }
    if(_GLF_DEAD(false))
     return 1.0;
    vec4 _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(false))
     return _GLF_IDENTITY(1.0, (1.0) / 1.0);
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(77.69, 6.6, -86.05, -98.28);
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     _GLF_color = mix(vec4(40.41, -789.694, 799.222, -604.782), vec4(-5.2, -9901.4418, 3.8, -5.8), (_GLF_IDENTITY(true ? vec4(-5.6, 3.6, 4.2, 146.518) : max(_GLF_IDENTITY(vec4(-86.88, 414.289, _GLF_IDENTITY(784.621, clamp(_GLF_IDENTITY(784.621, (true ? 784.621 : _GLF_FUZZED(th))), 784.621, 784.621)), 559.984), max(vec4(-86.88, 414.289, 784.621, 559.984), vec4(-86.88, 414.289, 784.621, 559.984))), vec4(9.0, 4.8, _GLF_IDENTITY(-641.537, clamp(_GLF_IDENTITY(-641.537, (-641.537) / 1.0), -641.537, _GLF_IDENTITY(-641.537, mix(float(_GLF_FUZZED(-25.38)), float(-641.537), bool(true))))), -3.4)), vec4(0.0, 0.0, 0.0, 0.0) + (true ? vec4(-5.6, 3.6, 4.2, 146.518) : max(_GLF_IDENTITY(vec4(-86.88, 414.289, _GLF_IDENTITY(784.621, clamp(_GLF_IDENTITY(784.621, (true ? 784.621 : _GLF_FUZZED(th))), 784.621, 784.621)), 559.984), max(vec4(-86.88, 414.289, 784.621, 559.984), vec4(-86.88, 414.289, 784.621, 559.984))), vec4(9.0, 4.8, _GLF_IDENTITY(-641.537, clamp(_GLF_IDENTITY(-641.537, (-641.537) / 1.0), -641.537, _GLF_IDENTITY(-641.537, mix(float(_GLF_FUZZED(-25.38)), float(-641.537), bool(true))))), -3.4))))));
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_IDENTITY(_GLF_color = _GLF_outVarBackup_GLF_color, (_GLF_color = _GLF_outVarBackup_GLF_color) * vec4(1.0, 1.0, 1.0, 1.0));
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(-41.48, 25.38, 68.81, -35.53);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
      }
    }
    _GLF_IDENTITY(_GLF_outVarBackup_GLF_color = _GLF_color, (true ? _GLF_outVarBackup_GLF_color = _GLF_color : _GLF_FUZZED(uintBitsToFloat(uvec4(45959u, 146530u, 106378u, 140792u)))));
    if(_GLF_DEAD(false))
     return 1.0;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(-36.55, 2727.6290, -6.1, -5.0);
     if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, ! (! (true)))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    if(_GLF_DEAD(false))
     {
      if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
       return 1.0;
      _GLF_color = vec4(-483.523, 608.380, -2.5, -3111.5458);
      if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord, exp(vec4(0.0, 0.0, 0.0, 0.0)) * (gl_FragCoord)).y < 0.0))))
       return 1.0;
     }
    _GLF_color = vec4(-32.16, -4.7, -135.509, -9229.3356);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(458.841, 0.1, -35.61, -23.25);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-2.2, -6.1, -7.1, -1.3);
    if(_GLF_DEAD(false))
     {
      _GLF_color = _GLF_IDENTITY(vec4(_GLF_IDENTITY(-8731.7882, mix(float(_GLF_FUZZED((2.6 * 6135.0387))), float(-8731.7882), bool(true))), -9.2, -13.66, -0.5), mix(vec4((vec4(_GLF_IDENTITY(-8731.7882, mix(float(_GLF_FUZZED((2.6 * 6135.0387))), float(-8731.7882), bool(true))), -9.2, -13.66, -0.5))[0], (vec4(_GLF_IDENTITY(-8731.7882, mix(float(_GLF_FUZZED((2.6 * 6135.0387))), float(-8731.7882), bool(true))), -9.2, -13.66, -0.5))[1], _GLF_FUZZED(-4496.6460), (vec4(_GLF_IDENTITY(-8731.7882, mix(float(_GLF_FUZZED((2.6 * 6135.0387))), float(-8731.7882), bool(true))), -9.2, -13.66, -0.5))[3]), vec4(_GLF_FUZZED(vec2(45.66, -6.9).t), _GLF_FUZZED(-381.603), (vec4(_GLF_IDENTITY(-8731.7882, mix(float(_GLF_FUZZED((2.6 * 6135.0387))), float(-8731.7882), bool(true))), -9.2, -13.66, -0.5))[2], _GLF_FUZZED((-4.9))), bvec4(false, false, true, false)));
      if(_GLF_DEAD(false))
       return 1.0;
     }
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   if(_GLF_DEAD(false))
    return 1.0;
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(-49.05, 235.435, 5.1, 6.5);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     return 1.0;
    }
   if(_GLF_DEAD(false))
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = radians(vec4(8.0, -6.1, 9.9, -720.520));
      if(_GLF_DEAD(false))
       return 1.0;
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < _GLF_IDENTITY(_GLF_IDENTITY(injectionSwitch, vec2(0.0, 0.0) + (injectionSwitch)), mix(vec2((_GLF_IDENTITY(injectionSwitch, vec2(0.0, 0.0) + (injectionSwitch)))[0], (_GLF_IDENTITY(injectionSwitch, vec2(0.0, 0.0) + (injectionSwitch)))[1]), vec2(_GLF_FUZZED(4202.1807), _GLF_FUZZED(-1.9)), bvec2(false, _GLF_FALSE(false, _GLF_IDENTITY((gl_FragCoord.x < _GLF_IDENTITY(0.0, clamp(0.0, 0.0, 0.0))), bool(bvec2((gl_FragCoord.x < _GLF_IDENTITY(0.0, clamp(0.0, 0.0, 0.0))), false))))))).y))))
       {
        if(_GLF_DEAD(false))
         {
          {
           vec4 _GLF_outVarBackup_GLF_color;
           _GLF_outVarBackup_GLF_color = _GLF_color;
           _GLF_color = vec4(-1.4, 1.9, 3180.3199, 3.9);
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
          }
          return 1.0;
         }
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     _GLF_color = vec4(7.4, -7616.7692, 25.04, 7.0);
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = floor(vec4(53.14, 5.7, -4.4, 8.8));
      if(_GLF_DEAD(false))
       return 1.0;
      do
       {
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(_GLF_IDENTITY(true, ! (! (true))), _GLF_IDENTITY((gl_FragCoord.y >= 0.0), ((_GLF_IDENTITY(gl_FragCoord.y >= 0.0, bool(_GLF_IDENTITY(bool(gl_FragCoord.y >= 0.0), ! (! (bool(gl_FragCoord.y >= 0.0)))))))) || false))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
      while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
     }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = reflect(vec4(75.09, -6.3, -5268.4364, -19.16), vec4(-80.65, 4.1, -5710.4230, -6161.4421));
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       return 1.0;
      }
    }
   return _GLF_IDENTITY(1.0, (_GLF_IDENTITY(1.0, (1.0) + 0.0)) / 1.0);
   if(_GLF_DEAD(false))
    return 1.0;
  }
 if(_GLF_IDENTITY(_GLF_IDENTITY(v, mix(vec2((v)[0], _GLF_FUZZED(-459.803)), vec2(_GLF_FUZZED(-2.2), (v)[1]), bvec2(false, _GLF_TRUE(true, _GLF_IDENTITY((gl_FragCoord.y >= length(vec3(0.0, 0.0, 0.0))), bool(bvec4(_GLF_IDENTITY((gl_FragCoord.y >= length(vec3(0.0, 0.0, 0.0))), ! (! ((gl_FragCoord.y >= length(vec3(0.0, 0.0, 0.0)))))), false, true, true))))))).y < 0.0, _GLF_IDENTITY(_GLF_IDENTITY(bool(bvec2(_GLF_IDENTITY(v.y < 0.0, bool(bvec3(v.y < 0.0, true, false))), true)), bool(bvec3(bool(bvec2(_GLF_IDENTITY(_GLF_IDENTITY(v.y, (false ? _GLF_FUZZED(-3.1) : v.y)) < 0.0, _GLF_IDENTITY(bool(bvec3(v.y < 0.0, true, false)), bool(bvec4(bool(bvec3(v.y < 0.0, true, false)), true, true, false)))), true)), true, true))), (_GLF_IDENTITY(bool(bvec2(_GLF_IDENTITY(_GLF_IDENTITY(v.y, min(_GLF_IDENTITY(v.y, max(v.y, v.y)), v.y)) < 0.0, bool(_GLF_IDENTITY(bvec3(v.y < 0.0, true, _GLF_IDENTITY(false, true && (_GLF_IDENTITY(false, (false) && true)))), bvec3(bvec4(_GLF_IDENTITY(_GLF_IDENTITY(bvec3(_GLF_IDENTITY(v.y < 0.0, _GLF_FALSE(false, (gl_FragCoord.y < 0.0)) || (v.y < 0.0)), true, _GLF_IDENTITY(false, (false) || false)), bvec3(bvec4(_GLF_IDENTITY(bvec3(_GLF_IDENTITY(v.y < 0.0, _GLF_FALSE(false, (gl_FragCoord.y < 0.0)) || (v.y < 0.0)), true, _GLF_IDENTITY(false, (false) || false)), bvec3(bvec4(_GLF_IDENTITY(bvec3(_GLF_IDENTITY(v.y < 0.0, _GLF_FALSE(false, (gl_FragCoord.y < 0.0)) || (v.y < 0.0)), true, _GLF_IDENTITY(false, (false) || false)), bvec3(bvec4(bvec3(_GLF_IDENTITY(v.y < 0.0, _GLF_FALSE(false, (gl_FragCoord.y < 0.0)) || (v.y < 0.0)), true, _GLF_IDENTITY(false, (false) || false)), false))), true))), true))), bvec3(bvec4(_GLF_IDENTITY(bvec3(v.y < 0.0, true, false), bvec3(bvec3(bvec3(v.y < 0.0, true, false)))), true))), false))))), true)), _GLF_IDENTITY(bool(bvec3(bool(bvec2(_GLF_IDENTITY(v.y < 0.0, _GLF_IDENTITY(bool(bvec3(_GLF_IDENTITY(v, (true ? v : _GLF_FUZZED(v))).y < 0.0, true, false)), ! (! (_GLF_IDENTITY(bool(bvec3(v.y < 0.0, true, false)), ! (! (_GLF_IDENTITY(bool(bvec3(v.y < 0.0, true, false)), ! (! (_GLF_IDENTITY(bool(bvec3(_GLF_IDENTITY(v.y < 0.0, false || (v.y < 0.0)), true, false)), bool(_GLF_IDENTITY(bvec2(bool(bvec3(_GLF_IDENTITY(v.y < 0.0, false || (v.y < 0.0)), true, false)), true), _GLF_IDENTITY(bvec2(bvec4(bvec2(bool(bvec3(_GLF_IDENTITY(v.y < 0.0, false || (v.y < 0.0)), true, false)), true), false, true)), bvec2(bvec3(bvec2(bvec4(bvec2(bool(bvec3(_GLF_IDENTITY(v.y < 0.0, false || (v.y < 0.0)), true, false)), true), false, true)), false)))))))))))))))), true)), true, true)), false || (bool(bvec3(bool(bvec2(_GLF_IDENTITY(v.y < 0.0, bool(bvec3(v.y < _GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED(3.0)), float(0.0), bool(true))), true, false))), true)), true, _GLF_IDENTITY(true, (true) && _GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))))))) || _GLF_IDENTITY(false, bool(bvec2(_GLF_IDENTITY(false, ! (! (_GLF_IDENTITY(false, bool(bvec4(false, true, false, false)))))), false))))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))))
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      if(_GLF_DEAD(false))
       return 1.0;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = clamp(vec4(-7.5, 2.4, -6.1, 638.644), 5.1, 548.798);
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-60.07, 871.595, 2.0, 6.4);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      if(_GLF_DEAD(false))
       {
        _GLF_color = (vec4(64.69, -7.7, 5657.5262, -6.3) / vec4(7650.5383, -8.2, -351.927, 867.196));
       }
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     if(_GLF_DEAD(false))
      {
       _GLF_color = ceil(vec4(_GLF_IDENTITY(-1.8, (-1.8) - 0.0), 9071.5798, -4.7, 3.2));
      }
     return 1.0;
    }
   th = - th;
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    return 1.0;
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = (vec4(-6064.2027, -4603.7037, _GLF_IDENTITY(-5.5, clamp(-5.5, _GLF_IDENTITY(-5.5, (true ? -5.5 : _GLF_FUZZED(pi2))), -5.5)), -9.3) - vec4(-4.3, -663.688, -642.337, 9415.7896));
    }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(17.42, -0.3, 9.9, -153.411);
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    if(_GLF_IDENTITY(_GLF_DEAD(false), (_GLF_DEAD(false)) && true))
     return 1.0;
    _GLF_outVarBackup_GLF_color = _GLF_IDENTITY(_GLF_color, clamp(_GLF_color, _GLF_color, _GLF_color));
    _GLF_color = vec4(-77.72, 775.395, 17.73, -8509.5945);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = exp(vec4(-0.3, -6344.7759, -75.86, -0.7));
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
   }
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = sinh(vec4(-3.4, 1.2, -3014.2169, 74.19));
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    return 1.0;
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(1838.1835, 2829.0419, -2.5, 3.5);
    }
   return 1.0;
  }
 return _GLF_IDENTITY(th, (_GLF_IDENTITY(th, (th) / 1.0)) * 1.0);
}
vec2 polarize(vec2 coord)
{
 {
  if(_GLF_IDENTITY(_GLF_DEAD(false), bool(bvec4(_GLF_DEAD(false), true, false, _GLF_FALSE(false, (gl_FragCoord.y < abs(0.0)))))))
   return vec2(1.0);
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(_GLF_IDENTITY(false, (_GLF_IDENTITY(false, (false) && true)) && true)))
   return vec2(1.0);
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(65.14, 3.9, -692.375, 41.99);
  if(_GLF_DEAD(false))
   {
    _GLF_color = intBitsToFloat(ivec4(38820, _GLF_IDENTITY(47598, (false ? _GLF_FUZZED((~ -23426)) : _GLF_IDENTITY(47598, int(ivec2(47598, 0))))), 38219, 26075));
   }
  if(_GLF_DEAD(false))
   return vec2(1.0);
  if(_GLF_DEAD(false))
   {
    _GLF_IDENTITY(_GLF_color = vec4(8.3, 614.321, -4206.3335, -2.8), (true ? _GLF_color = vec4(8.3, 614.321, -4206.3335, -2.8) : _GLF_FUZZED(_GLF_outVarBackup_GLF_color)));
   }
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (_GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(injectionSwitch.x, float(_GLF_IDENTITY(vec2(_GLF_IDENTITY(injectionSwitch.x, float(vec4(injectionSwitch.x, log(1.0), 1.0, 1.0))), 1.0), (vec2(_GLF_IDENTITY(injectionSwitch.x, float(vec4(injectionSwitch.x, log(1.0), 1.0, 1.0))), 1.0)) + vec2(0.0, 0.0)))), (injectionSwitch.x) - 0.0) < injectionSwitch.y, (_GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(injectionSwitch.x, float(vec2(_GLF_IDENTITY(injectionSwitch.x, float(vec4(injectionSwitch.x, log(1.0), 1.0, 1.0))), 1.0))), float(_GLF_IDENTITY(mat2(_GLF_IDENTITY(injectionSwitch.x, float(vec2(_GLF_IDENTITY(injectionSwitch.x, float(vec4(injectionSwitch.x, log(1.0), 1.0, 1.0))), 1.0))), 0.0, 0.0, 0.0), mat2(mat3x4(_GLF_IDENTITY(mat2(_GLF_IDENTITY(injectionSwitch.x, float(vec2(_GLF_IDENTITY(injectionSwitch.x, float(vec4(injectionSwitch.x, log(1.0), 1.0, 1.0))), 1.0))), 0.0, 0.0, 0.0), (mat2(_GLF_IDENTITY(injectionSwitch.x, float(vec2(_GLF_IDENTITY(injectionSwitch.x, float(vec4(injectionSwitch.x, log(1.0), 1.0, 1.0))), 1.0))), 0.0, 0.0, 0.0)) + mat2(0.0, 0.0, 0.0, 0.0))))))), (injectionSwitch.x) - 0.0) < injectionSwitch.y) || _GLF_FALSE(_GLF_IDENTITY(false, (false) || false), (injectionSwitch.x > injectionSwitch.y)))))))
   {
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = mat2x4(vec4(1.7, -9.2, 76.18, -509.470), vec4(6.0, -3551.2145, -14.23, 94.68))[0];
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     _GLF_color = floor(vec4(-8745.2181, 337.393, -64.61, 6078.2598));
     if(_GLF_DEAD(false))
      {
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = (vec4(-38.64, -3725.1220, 52.03, -5.3) - 8.1);
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       return vec2(1.0);
      }
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(-8418.8000, 778.418, -757.331, 9297.8606);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
      }
    }
    if(_GLF_DEAD(false))
     return vec2(1.0);
    if(_GLF_DEAD(false))
     return vec2(_GLF_IDENTITY(1.0, mix(float(_GLF_FUZZED(4.8)), float(1.0), bool(true))));
    _GLF_color = _GLF_IDENTITY(_GLF_outVarBackup_GLF_color, _GLF_IDENTITY(vec4(1.0, 1.0, 1.0, 1.0) * (_GLF_outVarBackup_GLF_color), (false ? _GLF_FUZZED(_GLF_color) : vec4(1.0, 1.0, _GLF_IDENTITY(1.0, (1.0) / 1.0), 1.0) * (_GLF_outVarBackup_GLF_color))));
    if(_GLF_DEAD(false))
     return vec2(1.0);
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     return vec2(1.0);
    if(_GLF_DEAD(_GLF_IDENTITY(false, (false) && true)))
     return vec2(1.0);
   }
  if(_GLF_DEAD(_GLF_IDENTITY(false, (_GLF_IDENTITY(false, ! (! (false)))) && true)))
   return vec2(1.0);
 }
 float pi = (_GLF_IDENTITY(355.0 / 113.0, (355.0 / 113.0) / 1.0));
 if(_GLF_DEAD(_GLF_IDENTITY(false, true && (false))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > _GLF_IDENTITY(injectionSwitch, clamp(injectionSwitch, _GLF_IDENTITY(injectionSwitch, (_GLF_IDENTITY(injectionSwitch, (injectionSwitch) + vec2(0.0, 0.0))) / vec2(1.0, 1.0)), _GLF_IDENTITY(injectionSwitch, vec2(injectionSwitch[0], injectionSwitch[1])))).y))))
    {
     _GLF_color = vec3(-5.9, -9655.9781, 411.642).yyyx;
    }
   _GLF_IDENTITY(_GLF_color = floor(vec4(7126.1798, -8.9, 4850.3894, -3.0)), _GLF_IDENTITY((_GLF_IDENTITY(_GLF_color = floor(vec4(7126.1798, -8.9, 4850.3894, -3.0)), (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(_GLF_color) : _GLF_color = floor(vec4(7126.1798, -8.9, 4850.3894, -3.0))))) / vec4(1.0, 1.0, 1.0, 1.0), ((_GLF_IDENTITY(_GLF_color = floor(vec4(7126.1798, -8.9, 4850.3894, -3.0)), (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(_GLF_color) : _GLF_color = _GLF_IDENTITY(floor(vec4(7126.1798, -8.9, 4850.3894, -3.0)), (_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) ? floor(vec4(7126.1798, -8.9, 4850.3894, -3.0)) : _GLF_FUZZED((++ _GLF_color))))))) / vec4(1.0, 1.0, 1.0, 1.0)) + sqrt(log(vec4(1.0, 1.0, 1.0, 1.0)))));
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = _GLF_IDENTITY((-57.90 + vec4(460.674, 82.54, 4.3, -148.669)), ((-57.90 + vec4(460.674, 82.54, 4.3, -148.669))) * mat4(1.0));
    }
   _GLF_IDENTITY(_GLF_color = vec4(87.13, -92.07, 1.6, -64.20), (_GLF_IDENTITY(_GLF_color = vec4(87.13, -92.07, 1.6, -64.20), (_GLF_color = vec4(87.13, -92.07, _GLF_IDENTITY(1.6, float(vec4(1.6, 1.0, 1.0, 1.0))), -64.20)) / vec4(1.0, 1.0, 1.0, 1.0))) / vec4(1.0, 1.0, 1.0, 1.0));
   if(_GLF_DEAD(false))
    return vec2(1.0);
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = _GLF_IDENTITY(vec4(-275.220, 38.74, -117.126, -340.371), min(vec4(-275.220, 38.74, -117.126, -340.371), _GLF_IDENTITY(vec4(-275.220, 38.74, -117.126, -340.371), max(vec4(-275.220, 38.74, -117.126, -340.371), vec4(-275.220, 38.74, -117.126, -340.371)))));
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, _GLF_IDENTITY((injectionSwitch.x < injectionSwitch.y), ! (! ((injectionSwitch.x < injectionSwitch.y)))))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = sinh(vec4(61.63, 20.99, 39.34, 545.736));
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
   }
  if(_GLF_DEAD(false))
   return vec2(1.0);
 }
 vec2 center = coord - vec2(0.5);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  if(_GLF_DEAD(false))
   return vec2(1.0);
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = fwidth((-7286.0320 + vec4(-97.92, -70.27, _GLF_IDENTITY(5118.0304, clamp(_GLF_IDENTITY(5118.0304, (true ? 5118.0304 : _GLF_FUZZED(pi))), 5118.0304, _GLF_IDENTITY(5118.0304, (5118.0304) / 1.0))), 656.627)));
   if(_GLF_IDENTITY(_GLF_WRAPPED_IF_TRUE(true), _GLF_TRUE(true, (gl_FragCoord.x >= 0.0)) && (_GLF_WRAPPED_IF_TRUE(true))))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  _GLF_color = vec4(820.194, _GLF_IDENTITY(35.21, clamp(35.21, 35.21, 35.21)), -9135.3825, 365.708);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(_GLF_IDENTITY(true, bool(bvec4(true, false, false, false))), (gl_FragCoord.x >= 0.0))))
   {
    if(_GLF_DEAD(false))
     {
      if(_GLF_DEAD(false))
       return vec2(1.0);
      return vec2(1.0);
     }
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      return vec2(1.0);
     _GLF_IDENTITY(_GLF_color = vec4(3427.4271, -593.326, _GLF_IDENTITY(-137.361, float(mat4x3(_GLF_IDENTITY(-137.361, mix(float(-137.361), float(_GLF_FUZZED(90.28)), bool(false))), abs(1.0), 1.0, 1.0, _GLF_IDENTITY(tan(0.0), mix(float(_GLF_FUZZED(-229.398)), float(tan(0.0)), bool(true))), 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0))), 738.739), (_GLF_IDENTITY(_GLF_color = vec4(3427.4271, -593.326, _GLF_IDENTITY(-137.361, float(mat4x3(_GLF_IDENTITY(-137.361, mix(float(-137.361), float(_GLF_FUZZED(90.28)), bool(false))), abs(1.0), 1.0, 1.0, _GLF_IDENTITY(tan(0.0), mix(float(_GLF_FUZZED(-229.398)), float(tan(0.0)), bool(true))), 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0))), 738.739), (_GLF_color = vec4(3427.4271, -593.326, _GLF_IDENTITY(-137.361, float(mat4x3(_GLF_IDENTITY(-137.361, mix(float(-137.361), float(_GLF_FUZZED(90.28)), bool(false))), abs(1.0), 1.0, 1.0, _GLF_IDENTITY(tan(0.0), mix(float(_GLF_FUZZED(_GLF_IDENTITY(-229.398, float(mat4x3(-229.398, 1.0, 0.0, 0.0, 1.0, sqrt(0.0), 1.0, 0.0, 0.0, 0.0, 0.0, 1.0))))), float(tan(0.0)), bool(true))), 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0))), 738.739)) + vec4(0.0, 0.0, 0.0, 0.0))) - vec4(0.0, 0.0, 0.0, 0.0));
     do
      {
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(-7658.0630, -8.9, -695.761, _GLF_IDENTITY(917.519, mix(float(_GLF_FUZZED((9.8 + -50.26))), float(917.519), bool(true))));
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         {
          vec4 _GLF_outVarBackup_GLF_color;
          for(int _injected_loop_counter = _GLF_IDENTITY(0, (0) | 0); _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
           {
            if(_GLF_DEAD(false))
             return vec2(1.0);
            _GLF_outVarBackup_GLF_color = _GLF_color;
           }
          _GLF_color = atan(vec2(84.20, 131.595), vec2(-10.15, 25.16)).ssts;
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (_GLF_IDENTITY(gl_FragCoord, vec4(gl_FragCoord[0], gl_FragCoord[1], gl_FragCoord[2], gl_FragCoord[3])).x >= 0.0))))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(-5.5, -9.2, 9.1, -81.36);
          }
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
     while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
    }
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(-2036.1397, -4603.8574, -379.387, -646.508);
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 _GLF_struct_16 _GLF_struct_replacement_16 = _GLF_struct_16(_GLF_struct_4(uvec4(1u), _GLF_struct_0(vec3(1.0), mat4x2(1.0), 1.0), _GLF_IDENTITY(bvec2(true), bvec2(_GLF_IDENTITY(bvec3(_GLF_IDENTITY(bvec2(true), bvec2(bvec4(bvec2(true), true, _GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))), false), bvec3(bvec4(bvec3(_GLF_IDENTITY(bvec2(_GLF_IDENTITY(true, true && (_GLF_IDENTITY(true, (true) || false)))), bvec2(bvec4(bvec2(true), true, _GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))), false), false))))), _GLF_struct_1(uvec2(1u), mat2x4(_GLF_IDENTITY(1.0, min(1.0, 1.0))), _GLF_IDENTITY(_GLF_IDENTITY(vec4(1.0), max(vec4(1.0), _GLF_IDENTITY(vec4(1.0), (vec4(1.0)) / vec4(1.0, 1.0, 1.0, 1.0)))), max(_GLF_IDENTITY(vec4(1.0), max(vec4(1.0), _GLF_IDENTITY(_GLF_IDENTITY(vec4(1.0), (_GLF_FALSE(false, (gl_FragCoord.y < 0.0)) ? _GLF_FUZZED(vec4(3452.1592, 6.0, 15.86, 6.8)) : vec4(1.0))), _GLF_IDENTITY((vec4(1.0)) / vec4(1.0, 1.0, 1.0, 1.0), (false ? _GLF_FUZZED(vec4(-74.93, -3.2, 87.23, 24.99)) : (vec4(1.0)) / vec4(1.0, _GLF_IDENTITY(1.0, (false ? _GLF_FUZZED(585.650) : 1.0)), 1.0, 1.0)))))), _GLF_IDENTITY(vec4(1.0), max(vec4(1.0), _GLF_IDENTITY(vec4(1.0), (vec4(1.0)) / vec4(1.0, 1.0, 1.0, 1.0)))))), ivec3(_GLF_IDENTITY(1, min(_GLF_IDENTITY(_GLF_IDENTITY(1, (1) | (_GLF_IDENTITY(1, int(ivec3(1, 0, 0))))), (1) * _GLF_IDENTITY(1, 0 | (_GLF_IDENTITY(1, (1) | (1))))), 1)))), _GLF_struct_2(1.0, uvec2(1u), mat3(1.0), bvec2(true), uvec2(1u), bvec2(true)), _GLF_struct_3(mat3(1.0), mat4(1.0), uvec3(1u)), true), _GLF_struct_9(_GLF_struct_5(mat4x3(1.0), mat2x3(1.0), mat4(1.0), mat2x3(1.0), vec2(1.0), ivec3(1), bvec4(true)), mat4x2(1.0), _GLF_struct_6(uvec4(1u), ivec4(1)), vec4(1.0), _GLF_struct_7(bvec3(true), ivec3(1)), _GLF_struct_8(mat4(1.0), true, vec3(1.0)), mat3x2(_GLF_IDENTITY(1.0, mix(float(1.0), _GLF_IDENTITY(float(_GLF_FUZZED(86.99)), max(float(_GLF_FUZZED(86.99)), float(_GLF_FUZZED(86.99)))), bool(false))))), _GLF_struct_12(_GLF_IDENTITY(ivec2(1), (ivec2(1)) - ivec2(0, 0)), mat2(_GLF_IDENTITY(1.0, max(1.0, 1.0))), _GLF_struct_10(mat4x2(1.0), uvec4(1u), mat4x2(1.0), mat4x2(1.0), mat2(1.0), vec4(1.0)), uvec4(_GLF_IDENTITY(1u, (true ? 1u : _GLF_FUZZED(134738u)))), length(center), vec4(1.0), _GLF_struct_11(_GLF_IDENTITY(_GLF_IDENTITY(bvec2(true), _GLF_IDENTITY(bvec2(bvec3(bvec2(true), false)), bvec2(bvec4(bvec2(bvec3(bvec2(true), false)), true, false)))), bvec2(bvec3(_GLF_IDENTITY(bvec2(true), bvec2(bvec3(_GLF_IDENTITY(bvec2(true), _GLF_IDENTITY(bvec2(bvec4(_GLF_IDENTITY(_GLF_IDENTITY(bvec2(true), _GLF_IDENTITY(bvec2(bvec4(bvec2(true), true, true)), bvec2(bvec4(bvec2(bvec4(_GLF_IDENTITY(bvec2(true), _GLF_IDENTITY(bvec2(bvec3(bvec2(true), false)), bvec2(bvec4(bvec2(bvec3(bvec2(true), false)), false, true)))), true, true)), true, false)))), bvec2(bvec4(bvec2(true), false, false))), true, false)), _GLF_IDENTITY(bvec2(bvec3(bvec2(bvec4(_GLF_IDENTITY(_GLF_IDENTITY(bvec2(true), _GLF_IDENTITY(bvec2(bvec4(bvec2(true), true, true)), bvec2(bvec4(bvec2(bvec4(_GLF_IDENTITY(bvec2(true), _GLF_IDENTITY(bvec2(bvec3(bvec2(true), false)), bvec2(bvec4(bvec2(bvec3(bvec2(true), false)), false, true)))), true, true)), true, false)))), bvec2(bvec4(bvec2(true), false, false))), true, false)), false)), bvec2(_GLF_IDENTITY(bvec3(bvec2(bvec3(bvec2(bvec4(_GLF_IDENTITY(_GLF_IDENTITY(bvec2(true), _GLF_IDENTITY(bvec2(bvec4(bvec2(true), true, true)), bvec2(bvec4(bvec2(bvec4(_GLF_IDENTITY(bvec2(true), _GLF_IDENTITY(bvec2(bvec3(bvec2(true), false)), bvec2(bvec4(bvec2(bvec3(bvec2(true), false)), false, true)))), true, true)), true, false)))), bvec2(bvec4(bvec2(true), false, false))), true, false)), false)), true), bvec3(bvec3(bvec3(bvec2(bvec3(bvec2(bvec4(_GLF_IDENTITY(_GLF_IDENTITY(bvec2(true), _GLF_IDENTITY(bvec2(bvec4(bvec2(true), true, true)), bvec2(bvec4(bvec2(bvec4(_GLF_IDENTITY(bvec2(true), _GLF_IDENTITY(bvec2(bvec3(bvec2(true), false)), bvec2(bvec4(bvec2(bvec3(bvec2(true), false)), false, true)))), true, true)), true, false)))), bvec2(bvec4(bvec2(true), false, false))), true, false)), false)), true)))))))), _GLF_FALSE(false, (gl_FragCoord.x < 0.0))))), false))), 1, mat2x3(1.0), true), mat2(1.0)), mat2x4(1.0), _GLF_struct_15(_GLF_struct_13(mat3x2(1.0), 1, mat4x2(1.0)), _GLF_struct_14(uvec3(1u))), ivec3(1), ivec4(_GLF_IDENTITY(1, (1) | (1))));
 float angle = ReallyApproxNormalizedAtan2(_GLF_IDENTITY(center, min(center, center)));
 return vec2(_GLF_struct_replacement_16._f2.dist, angle);
}
void main()
{
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch.x > injectionSwitch.y, (_GLF_IDENTITY(injectionSwitch.x > injectionSwitch.y, (injectionSwitch.x > injectionSwitch.y) && true)) || false)))))
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = mat3x4(-4.6, -3.2, -54.44, -744.426, 8.7, 6.6, -1.6, -1.6, 302.971, 77.14, -702.848, 9.3)[1];
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     return;
    }
   if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, false || (true))))
    {
     return;
    }
   else
    {
    }
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_IDENTITY(_GLF_color = vec4(0.2, -29.14, 1692.8725, -6.9), (_GLF_color = vec4(0.2, -29.14, 1692.8725, -6.9)) / vec4(1.0, 1.0, 1.0, _GLF_IDENTITY(1.0, (1.0) / 1.0)));
    if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0)), (_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))) || false)))
     {
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-0.5, -1.3, -806.277, 6.2);
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= log(1.0)))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      if(_GLF_DEAD(false))
       return;
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   if(_GLF_DEAD(false))
    return;
   {
    vec4 _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(false))
     {
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-52.19, 9.8, 942.325, -38.71);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      return;
     }
    if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     {
     }
    else
     {
      _GLF_outVarBackup_GLF_color = _GLF_color;
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_IDENTITY(_GLF_outVarBackup_GLF_color = _GLF_color, (_GLF_IDENTITY(_GLF_outVarBackup_GLF_color = _GLF_color, vec4(0.0, 0.0, 0.0, 0.0) + (_GLF_outVarBackup_GLF_color = _GLF_color))) - vec4(0.0, 0.0, 0.0, 0.0));
       if(_GLF_DEAD(false))
        return;
       _GLF_color = cos((vec4(-5.4, 0.8, -60.37, -9724.4495) * 4846.6172));
       if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, _GLF_FALSE(false, (gl_FragCoord.y < 0.0)) || (_GLF_IDENTITY(true, bool(bvec2(true, false)))))))
        {
         _GLF_color = _GLF_IDENTITY(_GLF_outVarBackup_GLF_color, mix(vec4(_GLF_FUZZED(_GLF_IDENTITY(-8.1, max(-8.1, -8.1))), _GLF_FUZZED(float((ivec4(99229, 79154, 95413, -83317) == ivec4(81690, -40977, -18496, 82693)))), (_GLF_outVarBackup_GLF_color)[2], (_GLF_outVarBackup_GLF_color)[3]), vec4(_GLF_IDENTITY((_GLF_outVarBackup_GLF_color), (true ? (_GLF_outVarBackup_GLF_color) : _GLF_FUZZED((-7856.4418 / sign(vec4(-27.50, 8932.8113, -6306.4506, -0.6))))))[0], (_GLF_outVarBackup_GLF_color)[1], _GLF_FUZZED(float(-33618)), _GLF_FUZZED(float(122068u))), bvec4(true, _GLF_TRUE(true, (gl_FragCoord.x >= 0.0)), _GLF_IDENTITY(false, (false) && true), false)));
         if(_GLF_DEAD(false))
          return;
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(-8.2, -2.0, 645.986, 391.561);
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
        }
      }
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(6.6, 9.3, -8990.9045, 51.04);
       }
     }
    _GLF_color = vec4(0.4, -521.596, 7477.9853, 2755.8225);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
      if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), bool(_GLF_IDENTITY(bvec3(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), false, false), bvec3(bvec3(bvec3(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.y < 0.0, bool(bvec3(gl_FragCoord.y < _GLF_IDENTITY(0.0, float(_GLF_IDENTITY(mat4(0.0, 0.0, _GLF_ONE(1.0, injectionSwitch.y), 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, sqrt(0.0), 0.0, abs(0.0), 1.0, 0.0, 0.0), (mat4(0.0, 0.0, _GLF_ONE(1.0, injectionSwitch.y), 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, sqrt(0.0), 0.0, abs(0.0), 1.0, 0.0, 0.0)) - mat4(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0)))), false, false))))), false, false))))))))
       return;
     }
    if(_GLF_DEAD(false))
     {
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(243.428, 26.63, -9.2, -4.9);
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= log(1.0)))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      return;
     }
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < sin(0.0)))))
     return;
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(91.51, 3.5, -3.0, -200.087);
     }
    if(_GLF_DEAD(false))
     return;
    if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
     {
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       return;
      return;
     }
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-8557.0849, -63.00, -43.40, 1369.6869);
     }
   }
   return;
   if(_GLF_DEAD(_GLF_IDENTITY(false, bool(bvec4(false, false, false, false)))))
    return;
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-195.436, -3138.7381, _GLF_IDENTITY(738.194, max(_GLF_IDENTITY(738.194, (true ? 738.194 : _GLF_FUZZED(40.18))), 738.194)), -353.651);
    }
   if(_GLF_DEAD(false))
    return;
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(_GLF_IDENTITY(7.0, mix(float(_GLF_IDENTITY(7.0, _GLF_IDENTITY(float(_GLF_IDENTITY(mat3(_GLF_IDENTITY(7.0, mix(float(_GLF_IDENTITY(7.0, _GLF_IDENTITY(max(7.0, _GLF_IDENTITY(7.0, (7.0) - 0.0)), float(mat3x2(max(7.0, _GLF_IDENTITY(7.0, (7.0) - 0.0)), 1.0, 0.0, abs(0.0), 1.0, 1.0))))), float(_GLF_FUZZED((87.74))), bool(false))), 1.0, 1.0, _GLF_IDENTITY(1.0, float(mat3x2(1.0, 1.0, 0.0, 1.0, 1.0, 1.0))), 1.0, 0.0, 1.0, 1.0, 1.0), (mat3(7.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0)) - mat3(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0))), float(mat2(float(_GLF_IDENTITY(_GLF_IDENTITY(mat3(7.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, _GLF_IDENTITY(1.0, (false ? _GLF_FUZZED(5790.9533) : 1.0))), (mat3(7.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0)) - mat3(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0)), (true ? _GLF_IDENTITY(mat3(7.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, _GLF_IDENTITY(1.0, (false ? _GLF_FUZZED(5790.9533) : 1.0))), (mat3(7.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0)) - mat3(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0)) : _GLF_FUZZED(mat3(425.796, 2.8, 914.176, 356.089, -965.871, 32.80, 8.9, -7.6, -6.6))))), 0.0, 1.0, 0.0))))), _GLF_IDENTITY(float(_GLF_FUZZED(-382.176)), mix(float(float(_GLF_FUZZED(-382.176))), float(_GLF_FUZZED(-274.269)), bool(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))), bool(false))), 249.159, -9.9, _GLF_IDENTITY(11.55, float(mat4x3(11.55, 0.0, 0.0, 1.0, 0.0, length(0.0), 1.0, tan(0.0), 1.0, 0.0, 1.0, 1.0))));
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = mix(vec4(-7.7, _GLF_IDENTITY(6850.0660, mix(float(6850.0660), float(_GLF_FUZZED(vec2(-1.1, 6.8).s)), bool(false))), 4.2, -9.5), vec4(-19.84, 602.845, -50.77, 8.2), bvec4(true, false, true, false));
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     return;
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord, clamp(gl_FragCoord, gl_FragCoord, gl_FragCoord)).x < _GLF_IDENTITY(0.0, float(_GLF_IDENTITY(mat4(0.0, log(exp(0.0)), 0.0, length(vec3(0.0, 0.0, 0.0)), 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, abs(0.0), sqrt(1.0), 0.0, cos(0.0)), (false ? _GLF_FUZZED(mat4(3.3, 66.02, 716.892, -2.3, -479.483, -24.45, -3.7, -8.1, 8966.2101, -818.290, -95.12, -6359.8191, -25.69, -7.2, 8.5, -4.4)) : mat4(0.0, log(exp(0.0)), 0.0, length(vec3(0.0, 0.0, 0.0)), 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, abs(0.0), sqrt(1.0), 0.0, cos(0.0))))))))))
    {
     _GLF_IDENTITY(_GLF_color = vec4(-767.200, -1.8, 3226.2443, 585.204), (_GLF_IDENTITY(_GLF_color = vec4(-767.200, -1.8, 3226.2443, 585.204), (_GLF_color = _GLF_IDENTITY(vec4(-767.200, -1.8, 3226.2443, 585.204), mix(vec4(_GLF_FUZZED(float(true)), _GLF_FUZZED(65.36), _GLF_FUZZED(-9656.7666), _GLF_FUZZED(-40.51)), vec4((vec4(-767.200, -1.8, 3226.2443, 585.204))[0], _GLF_IDENTITY((vec4(-767.200, -1.8, 3226.2443, 585.204))[1], max((vec4(-767.200, -1.8, 3226.2443, 585.204))[1], (vec4(-767.200, -1.8, 3226.2443, 585.204))[1])), (vec4(-767.200, -1.8, 3226.2443, 585.204))[2], (vec4(-767.200, -1.8, 3226.2443, 585.204))[3]), bvec4(true, true, true, true)))) / vec4(_GLF_ONE(1.0, injectionSwitch.y), _GLF_ONE(1.0, injectionSwitch.y), _GLF_ONE(1.0, injectionSwitch.y), _GLF_ONE(1.0, injectionSwitch.y)))) - abs(vec4(0.0, 0.0, 0.0, 0.0)));
    }
  }
 if(_GLF_DEAD(false))
  return;
 vec2 coord = gl_FragCoord.xy * (1.0 / 256.0);
 if(_GLF_DEAD(false))
  {
   _GLF_color = tan(vec4(857.283, -7770.8525, 9.4, -92.44));
  }
 vec2 coord1 = polarize(coord + vec2(20.0 / 256.0, _GLF_IDENTITY(- 80.0, min(- 80.0, _GLF_IDENTITY(- 80.0, 0.0 + (_GLF_IDENTITY(- 80.0, clamp(- 80.0, - 80.0, - 80.0)))))) / 256.0));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return;
 vec2 coord2 = polarize(coord + vec2(- 60.0 / 256.0, 40.0 / _GLF_IDENTITY(256.0, (256.0) - 0.0)));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return;
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(5318.7078, -34.37, 2743.4420, 28.66);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 vec2 coord3 = polarize(coord);
 {
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = mod(min(vec4(1.5, 0.9, 0.6, -57.80), vec4(-807.178, 9305.4926, 90.28, -5.7)), vec4(-28.73, 9.1, -7417.7589, -80.99));
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = (+ mat4(_GLF_IDENTITY(_GLF_IDENTITY(0.3, (0.3) - 0.0), _GLF_IDENTITY(float(mat4(_GLF_IDENTITY(0.3, (0.3) - 0.0), abs(0.0), 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0)), (false ? _GLF_FUZZED(-79.94) : float(mat4(_GLF_IDENTITY(0.3, (0.3) - 0.0), abs(0.0), 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0))))), 883.418, _GLF_IDENTITY(441.506, 1.0 * (441.506)), -46.04, 53.17, _GLF_IDENTITY(-5663.7476, min(-5663.7476, -5663.7476)), -8.4, 8.6, 7887.8643, 8.9, 9106.9414, 7034.7506, -7.8, 901.994, 4.9, 80.57)[1]);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_IDENTITY(_GLF_color, _GLF_IDENTITY((_GLF_color) / vec4(1.0, 1.0, 1.0, 1.0), _GLF_IDENTITY(vec4(mat3x4((_GLF_color) / vec4(1.0, 1.0, 1.0, 1.0), 0.0, 0.0, 1.0, 1.0, determinant(mat2(1.0, 0.0, 1.0, 1.0)), log(1.0), 0.0, 1.0)), clamp(vec4(mat3x4((_GLF_color) / vec4(1.0, 1.0, 1.0, 1.0), 0.0, 0.0, 1.0, 1.0, determinant(mat2(1.0, 0.0, 1.0, 1.0)), log(1.0), 0.0, 1.0)), vec4(mat3x4((_GLF_color) / vec4(1.0, 1.0, 1.0, 1.0), 0.0, 0.0, 1.0, 1.0, determinant(mat2(1.0, 0.0, 1.0, 1.0)), log(1.0), 0.0, 1.0)), vec4(mat3x4((_GLF_color) / vec4(1.0, 1.0, 1.0, 1.0), 0.0, 0.0, 1.0, 1.0, determinant(mat2(1.0, 0.0, 1.0, 1.0)), log(1.0), 0.0, 1.0))))));
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
   {
    _GLF_color = vec4(539.247, 84.73, -885.518, 213.753);
   }
  _GLF_color = vec4(7333.7660, 764.200, -102.673, -871.788);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (_GLF_IDENTITY(injectionSwitch, min(injectionSwitch, injectionSwitch)).x < injectionSwitch.y))))
   {
    do
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
    while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = mod(mod(vec4(_GLF_IDENTITY(-1207.3969, mix(float(-1207.3969), float(_GLF_FUZZED((-3241.5697 * (64.23 - -137.885)))), bool(false))), 9807.8063, 0.5, -7.6), -3.8), asinh(vec4(3.0, -5187.3961, -900.454, 201.020)));
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
   }
 }
 if(_GLF_DEAD(false))
  return;
 {
  if(_GLF_DEAD(false))
   {
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
       {
        if(_GLF_DEAD(false))
         return;
        _GLF_color = (- vec4(-1920.2878, 0.7, -705.063, 299.059));
       }
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = (vec4(16.52, -698.816, -8.6, 3.7) - 67.72);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
     }
    else
     {
     }
    _GLF_color = _GLF_IDENTITY(vec4(0.1, 5775.4551, 22.58, 73.61), clamp(vec4(0.1, 5775.4551, 22.58, 73.61), vec4(0.1, 5775.4551, 22.58, 73.61), vec4(0.1, 5775.4551, 22.58, 73.61)));
   }
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_WRAPPED_IF_FALSE(false))
   {
   }
  else
   {
    _GLF_outVarBackup_GLF_color = _GLF_color;
   }
  if(_GLF_IDENTITY(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))), ! _GLF_IDENTITY((! _GLF_IDENTITY((_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch, min(injectionSwitch, injectionSwitch)).y), true && ((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, mix(float(_GLF_FUZZED(306.954)), float(_GLF_IDENTITY(injectionSwitch.y, (injectionSwitch.y) + 0.0)), bool(true))))))))), bool(_GLF_IDENTITY(bvec2(_GLF_IDENTITY((_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch, min(injectionSwitch, injectionSwitch)).y), true && ((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, mix(float(_GLF_FUZZED(306.954)), float(_GLF_IDENTITY(injectionSwitch.y, (injectionSwitch.y) + 0.0)), bool(true))))))))), bool(bvec4((_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch, min(injectionSwitch, injectionSwitch)).y), true && ((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, mix(float(_GLF_FUZZED(306.954)), float(_GLF_IDENTITY(injectionSwitch.y, (injectionSwitch.y) + 0.0)), bool(true))))))))), false, true, false))), true), bvec2(bvec2(bvec2(_GLF_IDENTITY((_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch, min(injectionSwitch, injectionSwitch)).y), true && ((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, mix(float(_GLF_FUZZED(306.954)), float(_GLF_IDENTITY(injectionSwitch.y, (injectionSwitch.y) + 0.0)), bool(true))))))))), bool(bvec4((_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch, min(injectionSwitch, injectionSwitch)).y), true && ((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, mix(float(_GLF_FUZZED(306.954)), float(_GLF_IDENTITY(injectionSwitch.y, (injectionSwitch.y) + 0.0)), bool(true))))))))), false, true, false))), true))))))), ! (! ((! _GLF_IDENTITY((_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch, min(injectionSwitch, injectionSwitch)).y), true && ((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, mix(float(_GLF_FUZZED(306.954)), float(_GLF_IDENTITY(injectionSwitch.y, (injectionSwitch.y) + 0.0)), bool(true))))))))), bool(_GLF_IDENTITY(bvec2(_GLF_IDENTITY((_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch, min(injectionSwitch, injectionSwitch)).y), true && ((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, mix(float(_GLF_FUZZED(306.954)), float(_GLF_IDENTITY(injectionSwitch.y, (injectionSwitch.y) + 0.0)), bool(true))))))))), bool(bvec4((_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch, min(injectionSwitch, injectionSwitch)).y), true && ((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, mix(float(_GLF_FUZZED(306.954)), float(_GLF_IDENTITY(injectionSwitch.y, (injectionSwitch.y) + 0.0)), bool(true))))))))), false, true, false))), true), bvec2(bvec2(bvec2(_GLF_IDENTITY((_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch, min(injectionSwitch, injectionSwitch)).y), true && ((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, mix(float(_GLF_FUZZED(306.954)), float(_GLF_IDENTITY(injectionSwitch.y, (injectionSwitch.y) + 0.0)), bool(true))))))))), bool(bvec4((_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch, min(injectionSwitch, injectionSwitch)).y), true && ((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, mix(float(_GLF_FUZZED(306.954)), float(_GLF_IDENTITY(injectionSwitch.y, (injectionSwitch.y) + 0.0)), bool(true))))))))), false, true, false))), true))))))))))))
   return;
  if(_GLF_DEAD(_GLF_IDENTITY(_GLF_IDENTITY(false, (false) && true), bool(bvec3(_GLF_IDENTITY(false, (false) && _GLF_IDENTITY(true, (true) && true)), false, false)))))
   return;
  _GLF_color = tanh(vec4(-1510.1379, -4.7, -284.882, -54.68));
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
   {
    _GLF_color = _GLF_IDENTITY(_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, min(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, vec4(mat3x4(_GLF_outVarBackup_GLF_color, 0.0, 0.0, sqrt(0.0), 1.0, 1.0, 1.0, 0.0, 0.0))), (_GLF_FALSE(false, (gl_FragCoord.x < 0.0)) ? _GLF_FUZZED(_GLF_outVarBackup_GLF_color) : _GLF_IDENTITY(_GLF_outVarBackup_GLF_color, vec4(mat3x4(_GLF_outVarBackup_GLF_color, 0.0, 0.0, sqrt(0.0), 1.0, 1.0, 1.0, 0.0, 0.0))))), _GLF_outVarBackup_GLF_color)), (_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, min(_GLF_IDENTITY(_GLF_outVarBackup_GLF_color, vec4(mat3x4(_GLF_outVarBackup_GLF_color, 0.0, 0.0, sqrt(0.0), 1.0, 1.0, 1.0, 0.0, 0.0))), _GLF_outVarBackup_GLF_color))) - vec4(0.0, 0.0, 0.0, 0.0));
    if(_GLF_DEAD(false))
     return;
   }
 }
 if(_GLF_DEAD(false))
  return;
 if(_GLF_DEAD(false))
  return;
 if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord, min(_GLF_IDENTITY(gl_FragCoord, (gl_FragCoord) / sqrt(vec4(1.0, 1.0, 1.0, 1.0))), gl_FragCoord)).y < 0.0, bool(bvec3(_GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord, min(_GLF_IDENTITY(gl_FragCoord, (gl_FragCoord) / sqrt(vec4(1.0, 1.0, 1.0, 1.0))), gl_FragCoord)).y < 0.0, (_GLF_IDENTITY(gl_FragCoord, min(_GLF_IDENTITY(gl_FragCoord, (gl_FragCoord) / sqrt(vec4(1.0, 1.0, 1.0, 1.0))), gl_FragCoord)).y < 0.0) || false), true, false)))))))
  {
   _GLF_color = _GLF_IDENTITY(vec4(-4.6, 0.6, -609.074, 6.0), _GLF_IDENTITY((vec4(-4.6, 0.6, -609.074, 6.0)) * mat4(1.0), mix(vec4(((vec4(-4.6, 0.6, -609.074, 6.0)) * mat4(1.0))[0], (_GLF_IDENTITY((_GLF_IDENTITY(vec4(-4.6, 0.6, -609.074, 6.0), vec4(1.0, 1.0, 1.0, 1.0) * (vec4(-4.6, 0.6, -609.074, 6.0)))), clamp(_GLF_IDENTITY((_GLF_IDENTITY(vec4(-4.6, 0.6, -609.074, 6.0), vec4(1.0, 1.0, 1.0, 1.0) * (vec4(-4.6, 0.6, -609.074, 6.0)))), _GLF_IDENTITY(vec4(mat4x2((_GLF_IDENTITY(vec4(-4.6, 0.6, -609.074, 6.0), vec4(1.0, 1.0, 1.0, 1.0) * (vec4(-4.6, 0.6, -609.074, 6.0)))), 1.0, sqrt(0.0), 0.0, 0.0)), vec4(mat3x2(vec4(mat4x2((_GLF_IDENTITY(vec4(-4.6, 0.6, -609.074, 6.0), vec4(1.0, 1.0, 1.0, 1.0) * (vec4(-4.6, 0.6, -609.074, 6.0)))), 1.0, sqrt(0.0), 0.0, 0.0)), 1.0, 0.0)))), (_GLF_IDENTITY(vec4(-4.6, 0.6, -609.074, 6.0), vec4(1.0, 1.0, 1.0, 1.0) * (vec4(-4.6, 0.6, -609.074, 6.0)))), (_GLF_IDENTITY(vec4(-4.6, 0.6, -609.074, 6.0), vec4(1.0, 1.0, 1.0, 1.0) * (vec4(-4.6, 0.6, -609.074, 6.0)))))) * mat4(1.0))[1], _GLF_IDENTITY(((vec4(-4.6, 0.6, -609.074, 6.0)) * mat4(1.0))[2], max(((vec4(-4.6, 0.6, -609.074, 6.0)) * mat4(1.0))[2], ((vec4(-4.6, 0.6, -609.074, 6.0)) * mat4(1.0))[2])), _GLF_FUZZED(-991.256)), vec4(_GLF_FUZZED(-1.7), _GLF_FUZZED(389.953), _GLF_FUZZED(-548.413), ((vec4(-4.6, 0.6, -609.074, 6.0)) * mat4(1.0))[3]), bvec4(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), false, false, true))));
  }
 coord = coord1 - coord2 + coord3;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < abs(0.0)))))
  return;
 coord = floor(_GLF_IDENTITY(coord * 256.0, mat2(_GLF_ONE(1.0, _GLF_IDENTITY(injectionSwitch, (injectionSwitch) / sqrt(vec2(1.0, 1.0))).y)) * (coord * 256.0))) / _GLF_IDENTITY(256.0, (256.0) - 0.0);
 if(_GLF_IDENTITY(_GLF_DEAD(false), true && (_GLF_DEAD(false))))
  return;
 {
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(false))
   return;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = floor(atanh(vec4(-8503.2006, -93.62, 441.272, _GLF_IDENTITY(6.9, max(6.9, 6.9)))));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    if(_GLF_DEAD(false))
     return;
    _GLF_color = _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch.x, min(injectionSwitch.x, injectionSwitch.x)) > injectionSwitch.y))))
     return;
   }
  if(_GLF_IDENTITY(_GLF_DEAD(false), ! (! (_GLF_DEAD(false)))))
   return;
  if(_GLF_DEAD(false))
   {
    _GLF_color = radians(vec4(3360.5998, -3759.3277, 214.070, -9.8));
   }
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = (9.1 * vec4(-2.1, -545.146, 5.1, 4582.5004));
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
 }
 _GLF_color = vec4(_GLF_IDENTITY(texture(tex, coord).xyz, _GLF_IDENTITY(vec3(_GLF_IDENTITY(vec3(texture(tex, coord).xyz), mix(vec3((vec3(texture(tex, coord).xyz))[0], _GLF_FUZZED(-8.1), (vec3(texture(tex, coord).xyz))[2]), vec3(_GLF_FUZZED(-430.309), (vec3(texture(tex, coord).xyz))[1], _GLF_FUZZED(8.6)), bvec3(false, true, false)))), min(_GLF_IDENTITY(vec3(_GLF_IDENTITY(vec3(texture(tex, coord).xyz), mix(vec3((vec3(texture(tex, coord).xyz))[0], _GLF_FUZZED(-8.1), _GLF_IDENTITY((vec3(texture(tex, coord).xyz)), max((vec3(texture(tex, coord).xyz)), (vec3(texture(tex, coord).xyz))))[2]), vec3(_GLF_FUZZED(-430.309), (vec3(texture(tex, coord).xyz))[1], _GLF_FUZZED(8.6)), bvec3(false, true, false)))), clamp(vec3(_GLF_IDENTITY(vec3(texture(tex, coord).xyz), mix(vec3((vec3(texture(tex, coord).xyz))[0], _GLF_FUZZED(-8.1), (vec3(texture(tex, coord).xyz))[2]), vec3(_GLF_FUZZED(-430.309), (vec3(texture(tex, coord).xyz))[1], _GLF_FUZZED(8.6)), bvec3(false, true, false)))), vec3(_GLF_IDENTITY(vec3(texture(tex, coord).xyz), mix(vec3((vec3(texture(tex, coord).xyz))[0], _GLF_FUZZED(-8.1), (vec3(texture(tex, coord).xyz))[2]), vec3(_GLF_FUZZED(-430.309), (vec3(texture(tex, coord).xyz))[1], _GLF_FUZZED(8.6)), bvec3(false, true, false)))), vec3(_GLF_IDENTITY(vec3(texture(tex, coord).xyz), mix(vec3((vec3(texture(tex, coord).xyz))[0], _GLF_FUZZED(_GLF_IDENTITY(-8.1, max(-8.1, -8.1))), (vec3(texture(tex, coord).xyz))[2]), _GLF_IDENTITY(vec3(_GLF_FUZZED(-430.309), (_GLF_IDENTITY(vec3(texture(tex, coord).xyz), max(vec3(texture(tex, coord).xyz), vec3(texture(tex, coord).xyz))))[1], _GLF_FUZZED(8.6)), _GLF_IDENTITY(vec3(mat2x3(vec3(_GLF_FUZZED(-430.309), (_GLF_IDENTITY(vec3(texture(tex, coord).xyz), max(vec3(texture(tex, coord).xyz), vec3(texture(tex, coord).xyz))))[1], _GLF_FUZZED(8.6)), 1.0, 0.0, 0.0)), clamp(vec3(mat2x3(vec3(_GLF_FUZZED(-430.309), (_GLF_IDENTITY(vec3(texture(tex, coord).xyz), max(vec3(texture(tex, coord).xyz), vec3(texture(tex, coord).xyz))))[1], _GLF_FUZZED(8.6)), 1.0, 0.0, 0.0)), vec3(mat2x3(vec3(_GLF_FUZZED(-430.309), (_GLF_IDENTITY(vec3(texture(tex, coord).xyz), max(vec3(texture(tex, coord).xyz), vec3(texture(tex, coord).xyz))))[1], _GLF_FUZZED(8.6)), 1.0, 0.0, 0.0)), vec3(mat2x3(vec3(_GLF_FUZZED(-430.309), (_GLF_IDENTITY(vec3(texture(tex, coord).xyz), max(vec3(texture(tex, coord).xyz), vec3(texture(tex, coord).xyz))))[1], _GLF_FUZZED(8.6)), 1.0, 0.0, 0.0))))), bvec3(false, _GLF_IDENTITY(true, (true) || false), false)))))), vec3(_GLF_IDENTITY(vec3(texture(tex, coord).xyz), mix(vec3((vec3(texture(tex, coord).xyz))[0], _GLF_FUZZED(-8.1), _GLF_IDENTITY((vec3(texture(tex, coord).xyz))[2], min((vec3(texture(tex, coord).xyz))[2], (vec3(texture(tex, coord).xyz))[2]))), vec3(_GLF_IDENTITY(_GLF_FUZZED(-430.309), (_GLF_FUZZED(-430.309)) * 1.0), (vec3(texture(tex, coord).xyz))[1], _GLF_FUZZED(8.6)), bvec3(false, true, false))))))), 1.0);
 if(_GLF_IDENTITY(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), ! (! (_GLF_FALSE(false, (gl_FragCoord.y < 0.0)))))), false || (_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))))
  {
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-3145.3513, 73.58, -71.50, -1055.3324);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   return;
  }
 if(_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY((_GLF_IDENTITY(gl_FragCoord.y < 0.0, ! (! (gl_FragCoord.y < 0.0)))), ((_GLF_IDENTITY(gl_FragCoord.y < 0.0, ! (! (gl_FragCoord.y < 0.0))))) && true))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    return;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < log(1.0)))))
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(5.9, 578.723, -8.1, 78.88);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     _GLF_color = mix(vec4(-273.931, 5.1, 8.9, 689.550), vec4(1.3, 7242.7249, 6.8, 644.221), -9.0);
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = mix(vec4(0.9, -3.7, 7445.8806, 1.3), vec4(-2315.2032, 47.29, -3.3, 699.030), bvec4(false, true, true, false));
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
    }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = degrees((false ? vec4(0.0, -610.958, -3.0, -598.698) : vec4(-845.274, 3.2, -8.8, -7.2)));
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    if(_GLF_DEAD(false))
     return;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
     return;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = smoothstep(-7.1, -9.0, vec4(1.9, 3.1, -63.89, 3.4));
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    _GLF_color = _GLF_IDENTITY(vec4(-5.2, 6.3, -8.2, 8930.8146), clamp(_GLF_IDENTITY(vec4(-5.2, 6.3, -8.2, 8930.8146), clamp(vec4(-5.2, 6.3, -8.2, 8930.8146), vec4(-5.2, 6.3, -8.2, 8930.8146), vec4(-5.2, 6.3, -8.2, 8930.8146))), vec4(-5.2, 6.3, -8.2, 8930.8146), vec4(-5.2, 6.3, -8.2, 8930.8146)));
    {
     vec4 _GLF_outVarBackup_GLF_color;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(33.43);
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(3.5, 69.15, 4668.5782, _GLF_IDENTITY(-5.8, clamp(_GLF_IDENTITY(-5.8, min(-5.8, -5.8)), _GLF_IDENTITY(-5.8, 1.0 * (-5.8)), _GLF_IDENTITY(-5.8, mix(float(-5.8), float(_GLF_FUZZED(-66.00)), bool(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))))));
     if(_GLF_IDENTITY(_GLF_WRAPPED_IF_TRUE(true), bool(bool(_GLF_IDENTITY(_GLF_WRAPPED_IF_TRUE(true), bool(bvec2(_GLF_WRAPPED_IF_TRUE(true), false)))))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
       {
        if(_GLF_DEAD(false))
         return;
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = (+ vec4(759.346, -5.4, 99.53, -819.093));
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
          {
           vec4 _GLF_outVarBackup_GLF_color;
           _GLF_outVarBackup_GLF_color = _GLF_color;
           _GLF_color = vec4(-544.048, -11.56, 886.250, 66.49);
           if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (_GLF_IDENTITY(gl_FragCoord.x >= 0.0, _GLF_IDENTITY(bool(_GLF_IDENTITY(bvec3(gl_FragCoord.x >= 0.0, false, false), bvec3(bvec3(bvec3(gl_FragCoord.x >= 0.0, false, false))))), false || (bool(_GLF_IDENTITY(bvec3(gl_FragCoord.x >= 0.0, false, false), bvec3(bvec3(bvec3(gl_FragCoord.x >= 0.0, false, false))))))))))))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
          }
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_IDENTITY(sin(0.0), min(sin(0.0), sin(0.0)))))))
           {
            {
             vec4 _GLF_outVarBackup_GLF_color;
             _GLF_outVarBackup_GLF_color = _GLF_color;
             _GLF_color = vec4(915.258, -26.26, 40.15, -50.20);
             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
              {
               _GLF_color = _GLF_outVarBackup_GLF_color;
              }
            }
            return;
           }
         }
       }
      }
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(5.5, 49.18, 1656.1487, 552.859);
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      return;
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-92.89, -2.6, 4.1, -6596.7004);
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_IDENTITY(_GLF_color, min(_GLF_color, _GLF_color));
        _GLF_color = vec4(-7648.8160, 72.85, -1.7, -993.836);
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sqrt(0.0)))))
      return;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
       return;
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(3890.6890, 7.7, 298.662, 5.5);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_IDENTITY(_GLF_outVarBackup_GLF_color, max(_GLF_outVarBackup_GLF_color, _GLF_outVarBackup_GLF_color));
        }
      }
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(-9941.6400, -9.2, 7.1, 3.0);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
    }
    if(_GLF_DEAD(false))
     return;
    if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(_GLF_IDENTITY(true, false || (true)), (_GLF_IDENTITY(true, false || (true))) && true)))
     {
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        return;
       _GLF_color = mix(vec4(435.684, _GLF_IDENTITY(-745.050, (false ? _GLF_FUZZED(0.7) : -745.050)), 160.990, 3505.6433), vec4(-2.2, -5.5, 3873.0062, 241.245), 82.47);
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          return;
         return;
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        return;
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
           _GLF_IDENTITY(_GLF_color = (log2(-9.0) - vec4(vec3(_GLF_IDENTITY(123.646, _GLF_IDENTITY(float(mat3(123.646, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0)), (false ? _GLF_FUZZED(coord[0]) : float(mat3(123.646, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0))))), 2.2, -4.6), 7.4)), (true ? _GLF_color = (log2(-9.0) - vec4(vec3(_GLF_IDENTITY(123.646, _GLF_IDENTITY(float(mat3(123.646, _GLF_IDENTITY(1.0, (false ? _GLF_FUZZED(-4858.2712) : 1.0)), 1.0, _GLF_IDENTITY(1.0, min(1.0, 1.0)), 1.0, 0.0, 1.0, _GLF_IDENTITY(1.0, mix(float(_GLF_IDENTITY(1.0, clamp(_GLF_IDENTITY(1.0, min(1.0, 1.0)), 1.0, 1.0))), float(_GLF_FUZZED(-767.799)), bool(false))), 0.0)), (false ? _GLF_FUZZED(coord[0]) : float(mat3(123.646, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0))))), 2.2, -4.6), 7.4)) : _GLF_FUZZED(_GLF_outVarBackup_GLF_color)));
          }
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          return;
        }
      }
      _GLF_color = _GLF_IDENTITY(_GLF_outVarBackup_GLF_color, (false ? _GLF_FUZZED((_GLF_color ++)) : _GLF_outVarBackup_GLF_color));
      if(_GLF_DEAD(false))
       return;
      if(_GLF_DEAD(false))
       return;
     }
   }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    return;
   _GLF_color = ldexp(vec4(272.068, 0.7, -643.553, 42.91), ivec4(64510, 64925, 58020, -3602));
   if(_GLF_DEAD(false))
    return;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < log(1.0)))))
    return;
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_IDENTITY(_GLF_color = (+ mat3x4(-86.74, 7.8, 5.5, 177.824, 5.4, 5882.8364, 7617.2890, 3.8, -89.46, 4634.1110, 0.1, -578.370)[0]), _GLF_IDENTITY((_GLF_color = (+ mat3x4(-86.74, 7.8, 5.5, 177.824, 5.4, 5882.8364, 7617.2890, 3.8, -89.46, 4634.1110, _GLF_IDENTITY(0.1, max(_GLF_IDENTITY(0.1, mix(float(_GLF_IDENTITY(0.1, max(_GLF_IDENTITY(0.1, clamp(0.1, 0.1, 0.1)), 0.1))), float(_GLF_FUZZED(91.49)), bool(_GLF_IDENTITY(false, ! (! (false)))))), _GLF_IDENTITY(0.1, (0.1) - 0.0))), _GLF_IDENTITY(-578.370, _GLF_IDENTITY(float(mat3(-578.370, tan(0.0), 1.0, 1.0, _GLF_IDENTITY(1.0, float(_GLF_IDENTITY(mat4x2(1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0), (_GLF_IDENTITY(mat4x2(1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, _GLF_IDENTITY(0.0, (true ? 0.0 : _GLF_FUZZED(-0.3)))), transpose(transpose(mat4x2(1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0))))) - mat4x2(_GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x))))), exp(_GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED(94.55)), float(0.0), bool(true)))), 1.0, 1.0, 1.0)), mix(float(_GLF_FUZZED(-646.748)), float(float(mat3(-578.370, _GLF_IDENTITY(tan(0.0), min(tan(0.0), tan(0.0))), 1.0, _GLF_IDENTITY(1.0, min(1.0, _GLF_IDENTITY(1.0, (true ? 1.0 : _GLF_FUZZED(368.517))))), 1.0, _GLF_IDENTITY(exp(_GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED(94.55)), float(0.0), bool(true)))), (true ? _GLF_IDENTITY(exp(_GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED(94.55)), float(0.0), bool(true)))), mix(float(_GLF_FUZZED(774.643)), float(exp(_GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED(94.55)), float(0.0), bool(true))))), bool(true))) : _GLF_FUZZED((+ -1917.0981)))), 1.0, 1.0, 1.0))), bool(_GLF_IDENTITY(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)), ! (! (_GLF_IDENTITY(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)), true && (_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))))))))))[0])), (true ? _GLF_IDENTITY((_GLF_color = (+ mat3x4(-86.74, 7.8, 5.5, 177.824, 5.4, 5882.8364, 7617.2890, 3.8, -89.46, 4634.1110, _GLF_IDENTITY(_GLF_IDENTITY(0.1, max(_GLF_IDENTITY(0.1, mix(float(0.1), float(_GLF_FUZZED(91.49)), bool(false))), _GLF_IDENTITY(0.1, (0.1) - 0.0))), mix(float(_GLF_FUZZED(-7.0)), float(_GLF_IDENTITY(0.1, max(_GLF_IDENTITY(0.1, mix(float(0.1), float(_GLF_FUZZED(91.49)), bool(false))), _GLF_IDENTITY(0.1, (0.1) - 0.0)))), bool(true))), _GLF_IDENTITY(_GLF_IDENTITY(-578.370, max(-578.370, -578.370)), _GLF_IDENTITY(float(mat3(-578.370, tan(_GLF_IDENTITY(0.0, 0.0 + (_GLF_IDENTITY(0.0, min(0.0, 0.0))))), 1.0, 1.0, _GLF_IDENTITY(1.0, float(_GLF_IDENTITY(mat4x2(1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0), (_GLF_IDENTITY(mat4x2(1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0), transpose(transpose(mat4x2(1.0, 1.0, 1.0, 0.0, 1.0, _GLF_IDENTITY(0.0, float(mat4x2(0.0, 1.0, determinant(mat4(1.0, 0.0, abs(0.0), 0.0, abs(0.0), 1.0, 1.0, _GLF_IDENTITY(dot(vec3(0.0, 1.0, 0.0), vec3(0.0, 1.0, 0.0)), dot(vec3(0.0, 1.0, 0.0), vec3(0.0, 1.0, 0.0))), abs(0.0), 0.0, 1.0, 0.0, 0.0, 0.0, determinant(mat3(0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0)), 1.0)), 0.0, 0.0, 0.0, 1.0, _GLF_IDENTITY(_GLF_IDENTITY(dot(vec3(1.0, 0.0, 0.0), vec3(1.0, 0.0, 0.0)), dot(vec3(1.0, 0.0, 0.0), vec3(1.0, 0.0, 0.0))), clamp(_GLF_IDENTITY(dot(vec3(1.0, 0.0, 0.0), vec3(1.0, 0.0, 0.0)), dot(vec3(1.0, 0.0, 0.0), vec3(1.0, 0.0, 0.0))), _GLF_IDENTITY(dot(vec3(1.0, 0.0, 0.0), vec3(1.0, 0.0, 0.0)), dot(vec3(1.0, 0.0, 0.0), vec3(1.0, 0.0, 0.0))), _GLF_IDENTITY(dot(vec3(1.0, 0.0, 0.0), vec3(1.0, 0.0, 0.0)), dot(vec3(1.0, 0.0, 0.0), vec3(1.0, 0.0, 0.0)))))))), 0.0, 0.0))))) - mat4x2(_GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x))))), exp(_GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED(94.55)), float(0.0), bool(true)))), 1.0, 1.0, 1.0)), mix(float(_GLF_FUZZED(-646.748)), float(float(mat3(-578.370, tan(0.0), 1.0, 1.0, 1.0, exp(_GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED(94.55)), float(0.0), bool(true)))), 1.0, 1.0, 1.0))), bool(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)))))))[0])), ((_GLF_color = (+ mat3x4(-86.74, 7.8, 5.5, 177.824, 5.4, 5882.8364, 7617.2890, 3.8, -89.46, 4634.1110, _GLF_IDENTITY(0.1, max(_GLF_IDENTITY(0.1, mix(float(0.1), float(_GLF_FUZZED(91.49)), bool(false))), _GLF_IDENTITY(0.1, (0.1) - 0.0))), _GLF_IDENTITY(-578.370, _GLF_IDENTITY(float(mat3(-578.370, tan(0.0), 1.0, 1.0, _GLF_IDENTITY(1.0, float(_GLF_IDENTITY(mat4x2(_GLF_IDENTITY(1.0, mix(float(1.0), float(_GLF_FUZZED(-56.41)), bool(false))), 1.0, 1.0, 0.0, 1.0, _GLF_IDENTITY(0.0, (0.0) / cos(0.0)), 0.0, 0.0), (_GLF_IDENTITY(mat4x2(1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0), transpose(transpose(mat4x2(1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0))))) - mat4x2(_GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x), _GLF_ZERO(0.0, injectionSwitch.x))))), exp(_GLF_IDENTITY(0.0, _GLF_IDENTITY(mix(float(_GLF_FUZZED(94.55)), float(0.0), bool(true)), min(mix(float(_GLF_FUZZED(94.55)), float(0.0), bool(true)), mix(float(_GLF_FUZZED(94.55)), float(0.0), bool(true)))))), 1.0, 1.0, 1.0)), mix(float(_GLF_FUZZED(-646.748)), float(float(mat3(-578.370, _GLF_IDENTITY(tan(0.0), mix(float(_GLF_IDENTITY(tan(0.0), float(float(tan(0.0))))), float(_GLF_FUZZED(-5.2)), bool(false))), 1.0, 1.0, 1.0, exp(_GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED(94.55)), float(0.0), bool(true)))), 1.0, 1.0, 1.0))), bool(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)))))))[0]))) * vec4(1.0, 1.0, 1.0, 1.0)) : _GLF_FUZZED(vec4(149.216, 289.689, 5.8, -0.7)))) * cos(vec4(0.0, 0.0, 0.0, 0.0)));
  for(int _injected_loop_counter = _GLF_IDENTITY(0, (0) / 1); _GLF_WRAPPED_LOOP(_injected_loop_counter != 1); _injected_loop_counter ++)
   {
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_IDENTITY(_GLF_outVarBackup_GLF_color, vec4(mat3x2(_GLF_outVarBackup_GLF_color, 0.0, 1.0)));
      do
       {
        if(_GLF_DEAD(false))
         {
          do
           {
            _GLF_IDENTITY(_GLF_color = vec4(-4.3, 6.5, -9.7, -9.6), (_GLF_color = vec4(-4.3, 6.5, -9.7, -9.6)) - vec4(0.0, 0.0, 0.0, 0.0));
           }
          while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_IDENTITY(0.0, (_GLF_IDENTITY(true, true && (true)) ? _GLF_IDENTITY(0.0, min(0.0, 0.0)) : _GLF_FUZZED(mix(2.4, _GLF_IDENTITY(-338.063, clamp(-338.063, -338.063, -338.063)), true))))))));
          if(_GLF_DEAD(false))
           break;
         }
        if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
         discard;
       }
      while(_GLF_IDENTITY(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))), bool(bvec3(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))), true, true))));
     }
   }
 }
}
