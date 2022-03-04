; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 63
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %11 %44
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "gl_FragCoord"
               OpName %18 "buf0"
               OpMemberName %18 0 "_GLF_uniform_float_values"
               OpName %20 ""
               OpName %33 "buf1"
               OpMemberName %33 0 "_GLF_uniform_int_values"
               OpName %35 ""
               OpName %44 "_GLF_color"
               OpDecorate %11 BuiltIn FragCoord
               OpDecorate %17 ArrayStride 16
               OpMemberDecorate %18 0 Offset 0
               OpDecorate %18 Block
               OpDecorate %20 DescriptorSet 0
               OpDecorate %20 Binding 0
               OpDecorate %32 ArrayStride 16
               OpMemberDecorate %33 0 Offset 0
               OpDecorate %33 Block
               OpDecorate %35 DescriptorSet 0
               OpDecorate %35 Binding 1
               OpDecorate %44 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpConstant %6 4
          %8 = OpTypeFloat 32
          %9 = OpTypeVector %8 4
         %10 = OpTypePointer Input %9
         %11 = OpVariable %10 Input
         %12 = OpTypeInt 32 0
         %13 = OpConstant %12 1
         %14 = OpTypePointer Input %8
         %17 = OpTypeArray %8 %13
         %18 = OpTypeStruct %17
         %19 = OpTypePointer Uniform %18
         %20 = OpVariable %19 Uniform
         %21 = OpConstant %6 0
         %22 = OpTypePointer Uniform %8
         %25 = OpTypeBool
         %27 = OpConstant %6 256
         %28 = OpConstant %6 1
         %31 = OpConstant %12 3
         %32 = OpTypeArray %6 %31
         %33 = OpTypeStruct %32
         %34 = OpTypePointer Uniform %33
         %35 = OpVariable %34 Uniform
         %36 = OpConstant %6 2
         %37 = OpTypePointer Uniform %6
         %43 = OpTypePointer Output %9
         %44 = OpVariable %43 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %15 = OpAccessChain %14 %11 %13
         %16 = OpLoad %8 %15
         %23 = OpAccessChain %22 %20 %21 %21
         %24 = OpLoad %8 %23
         %26 = OpFOrdLessThan %25 %16 %24
         %29 = OpSelect %6 %26 %27 %28
         %30 = OpShiftRightArithmetic %6 %7 %29
         %38 = OpAccessChain %37 %35 %21 %36
         %39 = OpLoad %6 %38
         %40 = OpIEqual %25 %30 %39
               OpSelectionMerge %42 None
               OpBranchConditional %40 %41 %58
         %41 = OpLabel
         %45 = OpAccessChain %37 %35 %21 %21
         %46 = OpLoad %6 %45
         %47 = OpConvertSToF %8 %46
         %48 = OpAccessChain %37 %35 %21 %28
         %49 = OpLoad %6 %48
         %50 = OpConvertSToF %8 %49
         %51 = OpAccessChain %37 %35 %21 %28
         %52 = OpLoad %6 %51
         %53 = OpConvertSToF %8 %52
         %54 = OpAccessChain %37 %35 %21 %21
         %55 = OpLoad %6 %54
         %56 = OpConvertSToF %8 %55
         %57 = OpCompositeConstruct %9 %47 %50 %53 %56
               OpStore %44 %57
               OpBranch %42
         %58 = OpLabel
         %59 = OpAccessChain %37 %35 %21 %28
         %60 = OpLoad %6 %59
         %61 = OpConvertSToF %8 %60
         %62 = OpCompositeConstruct %9 %61 %61 %61 %61
               OpStore %44 %62
               OpBranch %42
         %42 = OpLabel
               OpReturn
               OpFunctionEnd
