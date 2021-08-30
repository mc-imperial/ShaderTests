; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 60
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %16 %36
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %16 "gl_FragCoord"
               OpName %24 "buf0"
               OpMemberName %24 0 "_GLF_uniform_float_values"
               OpName %26 ""
               OpName %36 "_GLF_color"
               OpName %39 "buf1"
               OpMemberName %39 0 "_GLF_uniform_int_values"
               OpName %41 ""
               OpDecorate %16 BuiltIn FragCoord
               OpDecorate %23 ArrayStride 16
               OpMemberDecorate %24 0 Offset 0
               OpDecorate %24 Block
               OpDecorate %26 DescriptorSet 0
               OpDecorate %26 Binding 0
               OpDecorate %36 Location 0
               OpDecorate %38 ArrayStride 16
               OpMemberDecorate %39 0 Offset 0
               OpDecorate %39 Block
               OpDecorate %41 DescriptorSet 0
               OpDecorate %41 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 1
         %10 = OpConstant %9 -1
         %12 = OpConstant %6 1
         %14 = OpTypeVector %6 4
         %15 = OpTypePointer Input %14
         %16 = OpVariable %15 Input
         %17 = OpTypeInt 32 0
         %18 = OpConstant %17 0
         %19 = OpTypePointer Input %6
         %22 = OpConstant %17 1
         %23 = OpTypeArray %6 %22
         %24 = OpTypeStruct %23
         %25 = OpTypePointer Uniform %24
         %26 = OpVariable %25 Uniform
         %27 = OpConstant %9 0
         %28 = OpTypePointer Uniform %6
         %31 = OpTypeBool
         %35 = OpTypePointer Output %14
         %36 = OpVariable %35 Output
         %37 = OpConstant %17 2
         %38 = OpTypeArray %9 %37
         %39 = OpTypeStruct %38
         %40 = OpTypePointer Uniform %39
         %41 = OpVariable %40 Uniform
         %42 = OpConstant %9 1
         %43 = OpTypePointer Uniform %9
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %11 = OpBitcast %6 %10
         %13 = OpExtInst %6 %1 FMin %11 %12
               OpStore %8 %13
         %20 = OpAccessChain %19 %16 %18
         %21 = OpLoad %6 %20
         %29 = OpAccessChain %28 %26 %27 %27
         %30 = OpLoad %6 %29
         %32 = OpFOrdGreaterThan %31 %21 %30
               OpSelectionMerge %34 None
               OpBranchConditional %32 %33 %57
         %33 = OpLabel
         %44 = OpAccessChain %43 %41 %27 %42
         %45 = OpLoad %9 %44
         %46 = OpConvertSToF %6 %45
         %47 = OpAccessChain %43 %41 %27 %27
         %48 = OpLoad %9 %47
         %49 = OpConvertSToF %6 %48
         %50 = OpAccessChain %43 %41 %27 %27
         %51 = OpLoad %9 %50
         %52 = OpConvertSToF %6 %51
         %53 = OpAccessChain %43 %41 %27 %42
         %54 = OpLoad %9 %53
         %55 = OpConvertSToF %6 %54
         %56 = OpCompositeConstruct %14 %46 %49 %52 %55
               OpStore %36 %56
               OpBranch %34
         %57 = OpLabel
         %58 = OpLoad %6 %8
         %59 = OpCompositeConstruct %14 %58 %58 %58 %58
               OpStore %36 %59
               OpBranch %34
         %34 = OpLabel
               OpReturn
               OpFunctionEnd
