; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 70
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %51
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %12 "buf1"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %33 "buf2"
               OpMemberName %33 0 "zero"
               OpName %35 ""
               OpName %40 "buf0"
               OpMemberName %40 0 "_GLF_uniform_int_values"
               OpName %42 ""
               OpName %51 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 1
               OpMemberDecorate %33 0 Offset 0
               OpDecorate %33 Block
               OpDecorate %35 DescriptorSet 0
               OpDecorate %35 Binding 2
               OpDecorate %39 ArrayStride 16
               OpMemberDecorate %40 0 Offset 0
               OpDecorate %40 Block
               OpDecorate %42 DescriptorSet 0
               OpDecorate %42 Binding 0
               OpDecorate %51 Location 0
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
         %22 = OpConstant %6 1
         %25 = OpTypeBool
         %33 = OpTypeStruct %15
         %34 = OpTypePointer Uniform %33
         %35 = OpVariable %34 Uniform
         %36 = OpTypePointer Uniform %15
         %39 = OpTypeArray %15 %10
         %40 = OpTypeStruct %39
         %41 = OpTypePointer Uniform %40
         %42 = OpVariable %41 Uniform
         %49 = OpTypeVector %6 4
         %50 = OpTypePointer Output %49
         %51 = OpVariable %50 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %19 = OpAccessChain %18 %14 %16 %17
         %20 = OpLoad %6 %19
         %21 = OpFNegate %6 %20
         %23 = OpExtInst %6 %1 Sinh %22
         %24 = OpExtInst %6 %1 Pow %21 %23
               OpStore %8 %24
         %26 = OpLoad %6 %8
         %27 = OpAccessChain %18 %14 %16 %16
         %28 = OpLoad %6 %27
         %29 = OpFOrdEqual %25 %26 %28
         %30 = OpLogicalNot %25 %29
               OpSelectionMerge %32 None
               OpBranchConditional %30 %31 %32
         %31 = OpLabel
         %37 = OpAccessChain %36 %35 %16
         %38 = OpLoad %15 %37
         %43 = OpAccessChain %36 %42 %16 %16
         %44 = OpLoad %15 %43
         %45 = OpIEqual %25 %38 %44
               OpBranch %32
         %32 = OpLabel
         %46 = OpPhi %25 %29 %5 %45 %31
               OpSelectionMerge %48 None
               OpBranchConditional %46 %47 %65
         %47 = OpLabel
         %52 = OpAccessChain %36 %42 %16 %17
         %53 = OpLoad %15 %52
         %54 = OpConvertSToF %6 %53
         %55 = OpAccessChain %36 %42 %16 %16
         %56 = OpLoad %15 %55
         %57 = OpConvertSToF %6 %56
         %58 = OpAccessChain %36 %42 %16 %16
         %59 = OpLoad %15 %58
         %60 = OpConvertSToF %6 %59
         %61 = OpAccessChain %36 %42 %16 %17
         %62 = OpLoad %15 %61
         %63 = OpConvertSToF %6 %62
         %64 = OpCompositeConstruct %49 %54 %57 %60 %63
               OpStore %51 %64
               OpBranch %48
         %65 = OpLabel
         %66 = OpAccessChain %36 %42 %16 %16
         %67 = OpLoad %15 %66
         %68 = OpConvertSToF %6 %67
         %69 = OpCompositeConstruct %49 %68 %68 %68 %68
               OpStore %51 %69
               OpBranch %48
         %48 = OpLabel
               OpReturn
               OpFunctionEnd
