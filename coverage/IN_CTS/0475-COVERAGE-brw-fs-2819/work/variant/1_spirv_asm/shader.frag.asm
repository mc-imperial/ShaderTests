; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 62
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %37
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %10 "b"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_float_values"
               OpName %16 ""
               OpName %37 "_GLF_color"
               OpName %43 "buf0"
               OpMemberName %43 0 "_GLF_uniform_int_values"
               OpName %45 ""
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpDecorate %37 Location 0
               OpDecorate %42 ArrayStride 16
               OpMemberDecorate %43 0 Offset 0
               OpDecorate %43 Block
               OpDecorate %45 DescriptorSet 0
               OpDecorate %45 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 1
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 2
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpTypeInt 32 1
         %18 = OpConstant %17 0
         %19 = OpConstant %17 1
         %20 = OpTypePointer Uniform %6
         %23 = OpTypeBool
         %24 = OpConstantFalse %23
         %26 = OpConstant %6 0
         %35 = OpTypeVector %6 4
         %36 = OpTypePointer Output %35
         %37 = OpVariable %36 Output
         %42 = OpTypeArray %17 %12
         %43 = OpTypeStruct %42
         %44 = OpTypePointer Uniform %43
         %45 = OpVariable %44 Uniform
         %46 = OpTypePointer Uniform %17
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %10 = OpVariable %7 Function
               OpStore %8 %9
         %21 = OpAccessChain %20 %16 %18 %19
         %22 = OpLoad %6 %21
         %25 = OpLoad %6 %8
         %27 = OpSelect %6 %24 %25 %26
         %28 = OpExtInst %6 %1 FClamp %22 %27 %9
               OpStore %10 %28
         %29 = OpLoad %6 %10
         %30 = OpAccessChain %20 %16 %18 %19
         %31 = OpLoad %6 %30
         %32 = OpFOrdEqual %23 %29 %31
               OpSelectionMerge %34 None
               OpBranchConditional %32 %33 %57
         %33 = OpLabel
         %38 = OpLoad %6 %10
         %39 = OpAccessChain %20 %16 %18 %18
         %40 = OpLoad %6 %39
         %41 = OpFMul %6 %38 %40
         %47 = OpAccessChain %46 %45 %18 %18
         %48 = OpLoad %17 %47
         %49 = OpConvertSToF %6 %48
         %50 = OpAccessChain %46 %45 %18 %18
         %51 = OpLoad %17 %50
         %52 = OpConvertSToF %6 %51
         %53 = OpAccessChain %46 %45 %18 %19
         %54 = OpLoad %17 %53
         %55 = OpConvertSToF %6 %54
         %56 = OpCompositeConstruct %35 %41 %49 %52 %55
               OpStore %37 %56
               OpBranch %34
         %57 = OpLabel
         %58 = OpAccessChain %46 %45 %18 %18
         %59 = OpLoad %17 %58
         %60 = OpConvertSToF %6 %59
         %61 = OpCompositeConstruct %35 %60 %60 %60 %60
               OpStore %37 %61
               OpBranch %34
         %34 = OpLabel
               OpReturn
               OpFunctionEnd
