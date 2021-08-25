; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 75
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %23 %35
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf1"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %23 "_GLF_color"
               OpName %26 "buf0"
               OpMemberName %26 0 "_GLF_uniform_int_values"
               OpName %28 ""
               OpName %35 "gl_FragCoord"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 1
               OpDecorate %23 Location 0
               OpDecorate %25 ArrayStride 16
               OpMemberDecorate %26 0 Offset 0
               OpDecorate %26 Block
               OpDecorate %28 DescriptorSet 0
               OpDecorate %28 Binding 0
               OpDecorate %35 BuiltIn FragCoord
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 2
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpTypeInt 32 1
         %16 = OpConstant %15 0
         %17 = OpConstant %15 1
         %18 = OpTypePointer Uniform %6
         %21 = OpTypeVector %6 4
         %22 = OpTypePointer Output %21
         %23 = OpVariable %22 Output
         %24 = OpConstant %9 1
         %25 = OpTypeArray %15 %24
         %26 = OpTypeStruct %25
         %27 = OpTypePointer Uniform %26
         %28 = OpVariable %27 Uniform
         %29 = OpTypePointer Uniform %15
         %34 = OpTypePointer Input %21
         %35 = OpVariable %34 Input
         %36 = OpTypePointer Input %6
         %41 = OpTypeBool
         %45 = OpConstant %6 1
         %46 = OpConstantComposite %21 %45 %45 %45 %45
         %47 = OpConstant %9 0
         %55 = OpConstant %6 2
         %56 = OpConstantComposite %21 %55 %55 %55 %55
         %64 = OpConstant %6 0
         %65 = OpConstantComposite %21 %45 %64 %64 %45
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %19 = OpAccessChain %18 %14 %16 %17
         %20 = OpLoad %6 %19
               OpStore %8 %20
         %30 = OpAccessChain %29 %28 %16 %16
         %31 = OpLoad %15 %30
         %32 = OpConvertSToF %6 %31
         %33 = OpCompositeConstruct %21 %32 %32 %32 %32
               OpStore %23 %33
         %37 = OpAccessChain %36 %35 %24
         %38 = OpLoad %6 %37
         %39 = OpAccessChain %18 %14 %16 %16
         %40 = OpLoad %6 %39
         %42 = OpFOrdGreaterThan %41 %38 %40
               OpSelectionMerge %44 None
               OpBranchConditional %42 %43 %44
         %43 = OpLabel
               OpStore %23 %46
               OpBranch %44
         %44 = OpLabel
         %48 = OpAccessChain %36 %35 %47
         %49 = OpLoad %6 %48
         %50 = OpAccessChain %18 %14 %16 %16
         %51 = OpLoad %6 %50
         %52 = OpFOrdGreaterThan %41 %49 %51
               OpSelectionMerge %54 None
               OpBranchConditional %52 %53 %54
         %53 = OpLabel
               OpStore %23 %56
               OpBranch %54
         %54 = OpLabel
         %57 = OpAccessChain %36 %35 %47
         %58 = OpLoad %6 %57
         %59 = OpAccessChain %18 %14 %16 %16
         %60 = OpLoad %6 %59
         %61 = OpFOrdGreaterThan %41 %58 %60
               OpSelectionMerge %63 None
               OpBranchConditional %61 %62 %63
         %62 = OpLabel
               OpStore %23 %65
         %66 = OpAccessChain %36 %35 %24
         %67 = OpLoad %6 %66
         %68 = OpAccessChain %18 %14 %16 %16
         %69 = OpLoad %6 %68
         %70 = OpFOrdGreaterThan %41 %67 %69
               OpSelectionMerge %72 None
               OpBranchConditional %70 %71 %72
         %71 = OpLabel
         %73 = OpLoad %6 %8
         %74 = OpExtInst %6 %1 Fract %73
               OpBranch %72
         %72 = OpLabel
               OpBranch %63
         %63 = OpLabel
               OpReturn
               OpFunctionEnd
