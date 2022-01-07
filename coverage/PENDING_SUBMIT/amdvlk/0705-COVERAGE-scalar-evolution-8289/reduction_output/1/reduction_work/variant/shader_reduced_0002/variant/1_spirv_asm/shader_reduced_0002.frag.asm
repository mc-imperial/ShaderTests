; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 81
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %71
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
               OpName %28 "buf1"
               OpMemberName %28 0 "_GLF_uniform_int_values"
               OpName %30 ""
               OpName %39 "a"
               OpName %41 "i"
               OpName %71 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpMemberDecorate %20 0 Offset 0
               OpDecorate %20 Block
               OpDecorate %27 ArrayStride 16
               OpMemberDecorate %28 0 Offset 0
               OpDecorate %28 Block
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 1
               OpDecorate %71 Location 0
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
         %26 = OpConstant %9 3
         %27 = OpTypeArray %15 %26
         %28 = OpTypeStruct %27
         %29 = OpTypePointer Uniform %28
         %30 = OpVariable %29 Uniform
         %31 = OpTypePointer Uniform %15
         %34 = OpTypeBool
         %38 = OpTypePointer Function %15
         %40 = OpConstant %15 1
         %69 = OpTypeVector %6 4
         %70 = OpTypePointer Output %69
         %71 = OpVariable %70 Output
         %72 = OpConstant %15 2
         %76 = OpConstant %6 0
         %77 = OpConstant %6 1
         %80 = OpConstantComposite %69 %76 %76 %76 %76
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %39 = OpVariable %38 Function
         %41 = OpVariable %38 Function
         %18 = OpAccessChain %17 %14 %16 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %24 = OpAccessChain %23 %22 %16
         %25 = OpLoad %15 %24
         %32 = OpAccessChain %31 %30 %16 %16
         %33 = OpLoad %15 %32
         %35 = OpSGreaterThan %34 %25 %33
               OpSelectionMerge %37 None
               OpBranchConditional %35 %36 %37
         %36 = OpLabel
               OpStore %39 %40
               OpStore %41 %16
               OpBranch %42
         %42 = OpLabel
               OpLoopMerge %44 %45 None
               OpBranch %46
         %46 = OpLabel
         %47 = OpLoad %15 %41
         %48 = OpAccessChain %31 %30 %16 %40
         %49 = OpLoad %15 %48
         %50 = OpSLessThan %34 %47 %49
               OpBranchConditional %50 %43 %44
         %43 = OpLabel
         %51 = OpAccessChain %23 %22 %16
         %52 = OpLoad %15 %51
         %53 = OpLoad %15 %39
         %54 = OpIMul %15 %53 %52
               OpStore %39 %54
               OpBranch %45
         %45 = OpLabel
         %55 = OpLoad %15 %41
         %56 = OpIAdd %15 %55 %40
               OpStore %41 %56
               OpBranch %42
         %44 = OpLabel
         %57 = OpLoad %15 %39
         %58 = OpConvertSToF %6 %57
               OpStore %8 %58
               OpBranch %37
         %37 = OpLabel
         %59 = OpLoad %6 %8
         %60 = OpAccessChain %17 %14 %16 %16
         %61 = OpLoad %6 %60
         %62 = OpExtInst %6 %1 FMax %59 %61
               OpStore %8 %62
         %63 = OpLoad %6 %8
         %64 = OpAccessChain %17 %14 %16 %16
         %65 = OpLoad %6 %64
         %66 = OpFOrdEqual %34 %63 %65
               OpSelectionMerge %68 None
               OpBranchConditional %66 %67 %79
         %67 = OpLabel
         %73 = OpAccessChain %31 %30 %16 %72
         %74 = OpLoad %15 %73
         %75 = OpConvertSToF %6 %74
         %78 = OpCompositeConstruct %69 %75 %76 %76 %77
               OpStore %71 %78
               OpBranch %68
         %79 = OpLabel
               OpStore %71 %80
               OpBranch %68
         %68 = OpLabel
               OpReturn
               OpFunctionEnd
