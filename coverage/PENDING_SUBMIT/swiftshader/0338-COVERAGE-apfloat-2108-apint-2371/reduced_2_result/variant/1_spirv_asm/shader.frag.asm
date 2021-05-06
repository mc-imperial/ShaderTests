; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 58
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %52
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 310
               OpName %4 "main"
               OpName %9 "GLF_dead16pickColor_inline_return_value_0"
               OpName %13 "GLF_dead8gl_FragCoord"
               OpName %25 "GLF_dead8mand_inline_return_value_1"
               OpName %30 "data"
               OpName %33 "GLF_dead8j"
               OpName %36 "i"
               OpName %45 "sum"
               OpName %52 "_GLF_color"
               OpDecorate %13 RelaxedPrecision
               OpDecorate %18 RelaxedPrecision
               OpDecorate %20 RelaxedPrecision
               OpDecorate %52 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 3
          %8 = OpTypePointer Function %7
         %10 = OpConstant %6 1
         %11 = OpTypeVector %6 4
         %12 = OpTypePointer Private %11
         %13 = OpVariable %12 Private
         %14 = OpTypeInt 32 0
         %15 = OpConstant %14 1
         %16 = OpTypePointer Private %6
         %19 = OpConstant %6 -1
         %21 = OpTypeInt 32 1
         %27 = OpConstant %14 16
         %28 = OpTypeArray %7 %27
         %29 = OpTypePointer Function %28
         %31 = OpConstant %21 4
         %32 = OpTypePointer Function %21
         %39 = OpConstant %21 0
         %40 = OpConstant %21 15
         %46 = OpConstant %21 1
         %51 = OpTypePointer Output %11
         %52 = OpVariable %51 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %25 = OpVariable %8 Function
         %30 = OpVariable %29 Function
         %33 = OpVariable %32 Function
         %36 = OpVariable %32 Function
         %45 = OpVariable %8 Function
         %17 = OpAccessChain %16 %13 %15
         %18 = OpLoad %6 %17
         %20 = OpFAdd %6 %18 %19
         %22 = OpConvertFToS %21 %20
         %23 = OpConvertSToF %6 %22
         %24 = OpCompositeConstruct %7 %10 %10 %23
               OpStore %9 %24
         %26 = OpLoad %7 %9
               OpStore %25 %26
         %34 = OpLoad %21 %33
         %35 = OpIMul %21 %31 %34
         %37 = OpLoad %21 %36
         %38 = OpIAdd %21 %35 %37
         %41 = OpExtInst %21 %1 SClamp %38 %39 %40
         %42 = OpExtInst %21 %1 SClamp %41 %39 %40
         %43 = OpLoad %7 %25
         %44 = OpAccessChain %8 %30 %42
               OpStore %44 %43
         %47 = OpAccessChain %8 %30 %46
         %48 = OpLoad %7 %47
         %49 = OpLoad %7 %45
         %50 = OpFAdd %7 %49 %48
               OpStore %45 %50
         %53 = OpLoad %7 %45
         %54 = OpCompositeExtract %6 %53 0
         %55 = OpCompositeExtract %6 %53 1
         %56 = OpCompositeExtract %6 %53 2
         %57 = OpCompositeConstruct %11 %54 %55 %56 %10
               OpStore %52 %57
               OpReturn
               OpFunctionEnd
