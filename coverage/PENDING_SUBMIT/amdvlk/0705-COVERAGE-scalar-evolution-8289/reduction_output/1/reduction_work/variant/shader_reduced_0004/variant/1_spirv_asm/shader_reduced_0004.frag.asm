; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 73
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %68
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %20 "buf_push"
               OpMemberName %20 0 "one"
               OpName %22 ""
               OpName %27 "buf1"
               OpMemberName %27 0 "_GLF_uniform_int_values"
               OpName %29 ""
               OpName %38 "a"
               OpName %40 "i"
               OpName %68 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpMemberDecorate %20 0 Offset 0
               OpDecorate %20 Block
               OpDecorate %26 ArrayStride 16
               OpMemberDecorate %27 0 Offset 0
               OpDecorate %27 Block
               OpDecorate %29 DescriptorSet 0
               OpDecorate %29 Binding 1
               OpDecorate %68 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 1
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpTypeInt 32 1
         %16 = OpConstant %15 0
         %17 = OpTypePointer Uniform %6
         %20 = OpTypeStruct %15
         %21 = OpTypePointer PushConstant %20
         %22 = OpVariable %21 PushConstant
         %23 = OpTypePointer PushConstant %15
         %26 = OpTypeArray %15 %10
         %27 = OpTypeStruct %26
         %28 = OpTypePointer Uniform %27
         %29 = OpVariable %28 Uniform
         %30 = OpTypePointer Uniform %15
         %33 = OpTypeBool
         %37 = OpTypePointer Function %15
         %39 = OpConstant %15 1
         %47 = OpConstant %15 120
         %58 = OpConstant %6 1
         %66 = OpTypeVector %6 4
         %67 = OpTypePointer Output %66
         %68 = OpVariable %67 Output
         %69 = OpConstant %6 0
         %70 = OpConstantComposite %66 %58 %69 %69 %58
         %72 = OpConstantComposite %66 %69 %69 %69 %69
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %38 = OpVariable %37 Function
         %40 = OpVariable %37 Function
         %18 = OpAccessChain %17 %14 %16 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %24 = OpAccessChain %23 %22 %16
         %25 = OpLoad %15 %24
         %31 = OpAccessChain %30 %29 %16 %16
         %32 = OpLoad %15 %31
         %34 = OpSGreaterThan %33 %25 %32
               OpSelectionMerge %36 None
               OpBranchConditional %34 %35 %36
         %35 = OpLabel
               OpStore %38 %39
               OpStore %40 %16
               OpBranch %41
         %41 = OpLabel
               OpLoopMerge %43 %44 None
               OpBranch %45
         %45 = OpLabel
         %46 = OpLoad %15 %40
         %48 = OpSLessThan %33 %46 %47
               OpBranchConditional %48 %42 %43
         %42 = OpLabel
         %49 = OpAccessChain %23 %22 %16
         %50 = OpLoad %15 %49
         %51 = OpLoad %15 %38
         %52 = OpIMul %15 %51 %50
               OpStore %38 %52
               OpBranch %44
         %44 = OpLabel
         %53 = OpLoad %15 %40
         %54 = OpIAdd %15 %53 %39
               OpStore %40 %54
               OpBranch %41
         %43 = OpLabel
         %55 = OpLoad %15 %38
         %56 = OpConvertSToF %6 %55
               OpStore %8 %56
               OpBranch %36
         %36 = OpLabel
         %57 = OpLoad %6 %8
         %59 = OpExtInst %6 %1 FMax %57 %58
               OpStore %8 %59
         %60 = OpLoad %6 %8
         %61 = OpAccessChain %17 %14 %16 %16
         %62 = OpLoad %6 %61
         %63 = OpFOrdEqual %33 %60 %62
               OpSelectionMerge %65 None
               OpBranchConditional %63 %64 %71
         %64 = OpLabel
               OpStore %68 %70
               OpBranch %65
         %71 = OpLabel
               OpStore %68 %72
               OpBranch %65
         %65 = OpLabel
               OpReturn
               OpFunctionEnd